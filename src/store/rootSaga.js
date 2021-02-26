import { all, fork } from 'redux-saga/effects'
import shows from './shows/sagas'
import show from './show/sagas'
import episode from './episode/sagas'

export default function* () {
  yield all([fork(shows), fork(show), fork(episode)])
}
