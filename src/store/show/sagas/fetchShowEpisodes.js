import { call, put } from 'redux-saga/effects'
import request from 'utils/request'
import * as actions from 'store/show/actions'

export default function* ({ payload }) {
  try {
    const { showId } = payload
    const { data } = yield call(request.get, `/shows/${showId}/episodes`)

    yield put(actions.fetchShowEpisodesSuccess(data))
  } catch (e) {
    yield put(actions.fetchShowEpisodesFailure(e))
  }
}
