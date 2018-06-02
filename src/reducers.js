import { combineReducers } from 'redux'

import loading from 'models/loading'
import login from 'models/sample'

const appReducer = combineReducers({
  loading,
  login
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
