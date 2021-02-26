import { call, put } from 'redux-saga/effects'
import request from 'utils/request'
import * as actions from 'store/show/actions'

export default function* ({ payload }) {
  try {
    const { showId } = payload
    const { data } = yield call(request.get, `/shows/${showId}`)

    yield put(actions.fetchShowSuccess(data))
  } catch (e) {
    yield put(actions.fetchShowFailure(e))
  }
}
