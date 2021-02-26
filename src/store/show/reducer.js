import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './selectors'
import * as actions from './actions'

export default createReducer(initialState, {
  [actions.fetchShowRequest]: state => ({
    ...state,
    isLoadingShow: true,
  }),
  [actions.fetchShowSuccess]: (state, { payload }) => ({
    ...state,
    show: payload.show,
    isLoadingShow: false,
  }),
  [actions.fetchShowFailure]: state => ({
    ...state,
    isLoadingShow: false,
  }),
  [actions.fetchShowEpisodesRequest]: state => ({
    ...state,
    isLoadingEpisodes: true,
  }),
  [actions.fetchShowEpisodesSuccess]: (state, { payload }) => ({
    ...state,
    episodes: payload.episodes,
    isLoadingEpisodes: false,
  }),
  [actions.fetchShowEpisodesFailure]: state => ({
    ...state,
    isLoadingEpisodes: false,
  }),
})
