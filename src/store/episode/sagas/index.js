import { all, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import fetchEpisode from './fetchEpisode'

export default function* () {
  yield all([takeLatest(actions.fetchEpisodeRequest.type, fetchEpisode)])
}
