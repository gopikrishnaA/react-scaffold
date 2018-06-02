import { createAction, createReducer } from 'redux-act'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { createSagaWatcher } from 'utilties/createSagaWatcher'
import invokeService from '../services'

// Actions
export const sampleAction = createAction('SAMPLE_ACTION')
export const onSucessAction = createAction('SAMPLE_ACTION_SUCCESS')
export const onLikeAction = createAction('LIKE_ACTION')
export const onSuccess = createAction('ON_SUCCESS')
export const goToSummery = createAction('GO_TO_SUMMERY')

/** --------------------------------------------------
 *
 * Sagas
 *
 */

export const sagas = {
  [sampleAction]: function * () {
    const result = yield call(invokeService, { serviceUrl: 'https://icanhazdadjoke.com' })
    yield put(onSucessAction({
      id: result.id,
      joke: result.joke
    }))
  },
  [onLikeAction]: function * ({ payload }) {
    if (payload.route === 'login') {
      yield put(onSuccess(payload))
      yield put(push('/login'))
    } else {
      yield put(sampleAction())
      yield put(onSuccess(payload))
    }
  },
  [goToSummery]: function * () {
    yield put(push('/summery'))
  }
}
export const sampleSagaWatcher = createSagaWatcher(sagas)

/** --------------------------------------------------
*
* Reducers
*
*/
export const sampleReducer = {
  [onSucessAction]: (state, payload) => ({
    ...state,
    ...payload
  }),
  [onSuccess]: (state, payload) => {
    return {
      ...state,
      items: {
        ...state.items,
        [payload.id]: {
          joke: payload.joke,
          status: payload.status,
          timeStamp: new Date().toLocaleString()
        }
      }
    }
  }
}

const sampleInitialState = {
  joke: 'Loading ....',
  id: '',
  items: {}
}

export default createReducer(sampleReducer, sampleInitialState)
