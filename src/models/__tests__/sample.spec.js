/* eslint-env jest */
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { isValidReducer, testReducer } from 'utilties/testUtil'
import {
  sagas,
  sampleAction,
  onSucessAction,
  onLikeAction,
  goToSummery,
  onSuccess,
  sampleReducer
} from 'models/sample'
import invokeService from 'services'
jest.mock('../../store')

describe('Testing sampleAction Sagas', () => {
  it('Should verify the joke service', () => {
    const gen = sagas[sampleAction]()
    const result = {
      id: '123',
      joke: 'test'
    }
    expect(gen.next().value).toEqual(call(invokeService, { serviceUrl: 'https://icanhazdadjoke.com' }))
    expect(gen.next(result).value).toEqual(put(onSucessAction(result)))
  })
})

describe('Testing gotToSummery Sagas', () => {
  it('Should verify the joke service', () => {
    const gen = sagas[goToSummery]()
    expect(gen.next().value).toEqual(put(push('/summery')))
  })
})

describe('Testing onLikeAction Sagas', () => {
  it('Should verify the likaction for particular joke', () => {
    const payload = {
      route: 'init'
    }
    const gen = sagas[onLikeAction]({ payload })
    expect(gen.next().value).toEqual(put(sampleAction()))
    expect(gen.next().value).toEqual(put(onSuccess(payload)))
  })
  it('Should verify the likaction from login route', () => {
    const payload = {
      route: 'login'
    }
    const gen = sagas[onLikeAction]({ payload })
    expect(gen.next().value).toEqual(put(onSuccess(payload)))
    expect(gen.next().value).toEqual(put(push('/login')))
  })
})

let state
describe('Testing onSucessAction Reducer', () => {
  state = {}
  const reducer = sampleReducer[onSucessAction]
  const result = {
    id: '12344',
    joke: 'Test'
  }
  const action = onSucessAction(result)
  it('Should be a valid Reducer', () => {
    isValidReducer(reducer)
  })
  it('should update state', () => {
    testReducer(state, reducer, action.payload, result)
  })
})

describe('Testing onSuccess Reducer', () => {
  state = {}
  const reducer = sampleReducer[onSuccess]
  const payload = {
    id: '12344',
    joke: 'Test',
    status: 'like'
  }
  const action = onSuccess(payload)
  const result = {
    items: {
      [payload.id]: {
        joke: payload.joke,
        status: payload.status,
        timeStamp: new Date().toLocaleString()
      }
    }
  }
  it('Should be a valid Reducer', () => {
    isValidReducer(reducer)
  })
  it('should update state', () => {
    testReducer(state, reducer, action.payload, result)
  })
})
