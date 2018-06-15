import React from 'react'
import { Route, Switch } from 'react-router'

import RedirectWithStatus from 'components/router/redirect-with-status'
import RouteWithStatus from 'components/router/route-with-status'

const renderRoutes = routes => (
  routes ? (
    <Switch>
      {routes.map((route, i) => {
        const {
          key = i,
          redirect = false,
          component: RouteComponent,
          status,
          ...routeProps
        } = route

        if (redirect) {
          return (
            <RedirectWithStatus
              {...routeProps}
              key={key}
              status={status} />
          )
        }

        return (
          <RouteWithStatus
            {...routeProps}
            key={key}
            status={status}
            render={props => (
              <RouteComponent
                {...props}
                match={route.match}
                routes={route.routes} />
            )} />
        )
      })}
    </Switch>
  ) : null
)

export default renderRoutes
