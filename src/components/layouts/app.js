import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import renderRoutes from 'lib/render-routes'

const AppLayout = ({ routes }) => (
  <>
    <header>
      <h1>React SSR Boilerplate</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" title="Home">Home</Link>
          </li>
          <li>
            <Link to="/about" title="About">About</Link>
          </li>
          <li>
            <Link
              to="/non-existing-page"
              title="Non-existing page">
              Non-existing page
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {renderRoutes(routes)}
  </>
)

AppLayout.propTypes = {
  routes: PropTypes.array
}

export default AppLayout
