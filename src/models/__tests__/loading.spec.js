/* eslint-env jest */
import { isValidReducer, testReducer } from 'utilties/testUtil'
import {
  showLoader,
  hideLoader,
  reducer as loading
} from 'models/loading'

let state
describe('Testing showLoader Reducer', () => {
  state = {}
  const reducer = loading[showLoader]
  const action = showLoader()
  const result = {
    loading: true
  }
  it('Should be a valid Reducer', () => {
    isValidReducer(reducer)
  })
  it('should update state', () => {
    testReducer(state, reducer, action.payload, result)
  })
})

describe('Testing hideLoader Reducer', () => {
  state = {}
  const reducer = loading[hideLoader]
  const action = hideLoader()
  const result = {
    loading: false
  }
  it('Should be a valid Reducer', () => {
    isValidReducer(reducer)
  })
  it('should update state', () => {
    testReducer(state, reducer, action.payload, result)
  })
})
