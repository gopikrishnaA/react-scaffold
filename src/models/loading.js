import { createAction, createReducer } from 'redux-act'
import { createSagaWatcher } from 'utilties/createSagaWatcher'

// Actions
export const showLoader = createAction('SHOW_LOADER')
export const hideLoader = createAction('HIDE_LOADER')

/** --------------------------------------------------
 *
 * Sagas
 *
 */

export const sagas = {
}
export const loadingSagaWatcher = createSagaWatcher(sagas)

/** --------------------------------------------------
 *
 * Reducers
 *
 */
export const reducer = {
  [showLoader]: (state) => ({
    ...state,
    loading: true
  }),
  [hideLoader]: (state) => ({
    ...state,
    loading: false
  })
}

const initialState = {
  loading: false
}

export default createReducer(reducer, initialState)
