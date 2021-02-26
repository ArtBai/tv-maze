import { all, takeLatest } from 'redux-saga/effects'
import * as actions from 'store/shows/actions'
import fetchShows from 'store/shows/sagas/fetchShows'

export default function*() {
  yield all([takeLatest(actions.fetchShowsRequest.type, fetchShows)])
}

