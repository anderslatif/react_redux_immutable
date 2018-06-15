import React from 'react'
import { hot } from 'react-hot-loader'

import renderRoutes from 'lib/render-routes'

import routes from 'routes'

const Root = () => (
  <>
    {renderRoutes(routes)}
  </>
)

export default hot(module)(Root)
