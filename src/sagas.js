
import { loadingSagaWatcher } from 'models/loading'
import { sampleSagaWatcher } from 'models/sample'

function * rootSaga () {
  yield [
    ...sampleSagaWatcher,
    ...loadingSagaWatcher
  ]
}

export default rootSaga
