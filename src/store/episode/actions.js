import { createAction } from '@reduxjs/toolkit'

export const fetchEpisodeRequest = createAction('fetchEpisode:request', episodeId => ({
  payload: { episodeId },
}))
export const fetchEpisodeSuccess = createAction('fetchEpisode:success', episode => ({
  payload: { episode },
}))
export const fetchEpisodeFailure = createAction('fetchEpisode:failure', error => ({ error }))
