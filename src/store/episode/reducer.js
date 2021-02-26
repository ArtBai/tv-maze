import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './selectors'
import * as actions from './actions'

export default createReducer(initialState, {
  [actions.fetchEpisodeRequest]: state => ({
    ...state,
    isLoadingEpisode: true,
  }),
  [actions.fetchEpisodeSuccess]: (state, { payload }) => ({
    ...state,
    episode: payload.episode,
    isLoadingEpisode: false,
  }),
  [actions.fetchEpisodeFailure]: state => ({
    ...state,
    isLoadingEpisode: false,
  }),
})
