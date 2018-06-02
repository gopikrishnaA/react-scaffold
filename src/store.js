import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'

import rootReducer from './reducers'
import rootSaga from './sagas'

import { isProduction } from './utilties/util'

// configure reduxRouterMiddleware
export const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
  promiseMiddleware,
  reduxRouterMiddleware
]
const enhancers = [
  applyMiddleware(...middlewares)
]
let composeEnhancers
if (isProduction()) {
  composeEnhancers = compose
} else {
  composeEnhancers = require('redux-devtools-extension').composeWithDevTools
}

// mount it on the Store
const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers)
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application

export default store
