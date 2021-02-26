import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './selectors'
import * as actions from './actions'

export default createReducer(initialState, {
  [actions.fetchShowsRequest]: state => ({
    ...state,
    isLoadingShows: true,
  }),
  [actions.fetchShowsSuccess]: (state, { payload }) => ({
    ...state,
    shows: payload.shows,
    isLoadingShows: false,
  }),
  [actions.fetchShowsFailure]: state => ({
    ...state,
    isLoadingShows: false,
  }),
})
