import { takeEvery } from 'redux-saga/effects'

/* -----------------------------------
* store.js
* -----------------------------------
* import { sagaWatcher as modelASagaWatcher } from 'models/modelA'
*
* function * rootSaga () {
*   yield [
*     ...modelASagaWatcher
*   ]
* }
*/
export const createSagaWatcher = sagas => Object
  .keys(sagas)
  .map(type => (function * () { yield takeEvery(type, sagas[type]) })())
