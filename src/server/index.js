import 'raf/polyfill'

import express from 'express'
import morgan from 'morgan'

import { PORT } from 'server/settings'

import app from 'server/app'
import createServer from 'server/lib/create-server'

const server = createServer(app)

server.start(PORT)

if (module.hot) {
  module.hot.accept('server/app', () => {
    server.replaceHandler(app)
  })

  module.hot.accept('server/settings', () => {
    server.restart(PORT)
  })
}
