import { all, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import fetchShow from './fetchShow'
import fetchShowEpisodes from './fetchShowEpisodes'

export default function* () {
  yield all([
    takeLatest(actions.fetchShowRequest.type, fetchShow),
    takeLatest(actions.fetchShowEpisodesRequest.type, fetchShowEpisodes),
  ])
}
