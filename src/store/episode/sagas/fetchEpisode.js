import { call, put } from 'redux-saga/effects'
import request from 'utils/request'
import * as actions from 'store/episode/actions'

export default function* ({ payload }) {
  try {
    const { episodeId } = payload
    const { data } = yield call(request.get, `/episodes/${episodeId}`)

    yield put(actions.fetchEpisodeSuccess(data))
  } catch (e) {
    yield put(actions.fetchEpisodeFailure(e))
  }
}
