import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router'

import Status from 'components/router/status'

const RouteWithStatus = ({ status, ...routeProps }) => (
  <Status code={status}>
    <Route {...routeProps} />
  </Status>
)

RouteWithStatus.propTypes = {
  status: PropTypes.number
}

export default RouteWithStatus
