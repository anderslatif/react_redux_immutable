import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router'

const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = code
      }

      return children
    }} />
)

Status.propTypes = {
  children: PropTypes.node,
  code: PropTypes.number
}

export default Status
