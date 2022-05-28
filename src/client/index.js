import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppContainer from './containers/AppContainer'
import "./index.css";

const store = configureStore(window.__PRELOADED_STATE__, window.__REDUX_DEVTOOLS_EXTENSION__)
delete window.__PRELOADED_STATE__
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
)