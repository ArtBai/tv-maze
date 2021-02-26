import { call, put } from 'redux-saga/effects'
import request from 'utils/request'
import * as actions from 'store/shows/actions'

export default function* () {
  try {
    const { data } = yield call(request.get, '/shows')

    yield put(actions.fetchShowsSuccess(data))
  } catch (e) {
    yield put(actions.fetchShowsFailure(e))
  }
}
