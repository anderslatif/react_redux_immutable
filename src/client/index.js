import 'core-js/es6/map'
import 'core-js/es6/set'

import 'raf/polyfill'

import 'normalize.css'

import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import Root from 'components/root'
import {fromJS} from 'immutable';
import {configureStore} from '../store/configureStore';

const rootNode = document.getElementById('root')

const preloadedState = typeof window !== 'undefined' && fromJS(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;
const cookies = {"token": "just showing how it would work with thunk helpers"};
const store = configureStore(preloadedState, { cookies });

const renderApp = () => (
  <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
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
