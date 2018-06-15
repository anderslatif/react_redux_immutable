import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router'

import Status from 'components/router/status'

const RedirectWithStatus = ({ status, ...redirectProps }) => (
  <Status code={status}>
    <Redirect {...redirectProps} />
  </Status>
)

RedirectWithStatus.propTypes = {
  status: PropTypes.number
}

export default RedirectWithStatus
