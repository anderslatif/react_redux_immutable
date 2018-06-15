import 'core-js/es6/map'
import 'core-js/es6/set'

import 'raf/polyfill'

import 'normalize.css'

import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Root from 'components/root'

const rootNode = document.getElementById('root')

const renderApp = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)

hydrate(
  renderApp(),
  rootNode
)

if (module.hot) {
  module.hot.accept(['lib/render-routes', 'components/root'], () => {
    render(
      renderApp,
      rootNode
    )
  })
}
