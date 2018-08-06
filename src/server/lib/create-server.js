import http from 'http'

const createServer = handler => {
  const server = http.createServer(handler)

  server.replaceHandler = (() => {
    let currentHandler = handler

    return handler => {
      if (currentHandler) {
        server.removeListener('request', currentHandler)
      }

      server.addListener('request', handler)
      currentHandler = handler
    }
  })()

  server.start = (port) => {
    server.listen(port, () => {
      const { address, port } = server.address()
      console.log(`Server listening at ${address}:${port}`)
    })
  }

  server.restart = (port) => {
    server.close(() => {
      server.start(port)
    })
  }

  return server
}

export default createServer
