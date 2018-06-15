import AppLayout from 'components/layouts/app'

import HomeView from 'components/views/home'
import AboutView from 'components/views/about'
import NotFoundView from 'components/views/not-found'

export default [
  {
    component: AppLayout,
    routes: [
      {
        component: HomeView,
        path: '/',
        exact: true
      },
      {
        component: AboutView,
        path: '/about',
        exact: true
      },
      {
        redirect: true,
        from: '/redirect-to-about',
        to: '/about'
      },
      {
        component: NotFoundView,
        status: 404
      }
    ]
  }
]
