import fs from 'fs'
import path from 'path'

import express from 'express'
import morgan from 'morgan'
import serveFavicon from 'serve-favicon'
import staticGzip from 'express-static-gzip'

import { html } from 'common-tags'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { LOG_FORMAT } from 'server/settings'

import Root from 'components/root'
import {configureStore} from '../store/configureStore';
import initialStoreState from '../store/initialStoreState'
import {Provider} from 'react-redux/dist/react-redux';

const assetsManifest = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../client/assets-manifest.json'),
    'utf8'
  )
)

const app = express()

app.use(morgan(LOG_FORMAT))

app.use(serveFavicon('public/favicon.ico'))
app.use(staticGzip('public', { indexFromEmptyFile: false }))
app.use('/assets', staticGzip('build/client', { indexFromEmptyFile: false }))

app.get('*', (req, res) => {
    const cookies = {"token": "just showing how it would work with thunk helpers"};
    const store = configureStore(initialStoreState, { cookies });

    const routerContext = {
      store
    }
  const markup = renderToString(
    <StaticRouter
      context={routerContext}
      location={req.url}>
        <Provider store={store}>
            <Root />
        </Provider>
    </StaticRouter>
  )

  const {
    status,
    url: redirectUrl
  } = routerContext

  if (redirectUrl) {
    res.redirect(status || 302, redirectUrl)
    return
  }

  res
    .status(status || 200)
    .send(html`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <title>React SSR Boilerplate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assetsManifest.index.css
            ? `<link rel="stylesheet" href="${assetsManifest.index.css}" />`
            : ''}
        </head>
        <body>
          <div id="root">${markup}</div>
          <script src="${assetsManifest.index.js}" defer>
                // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\\u003c')}
        </script>
        </body>
      </html>
    `)
})

export default app
