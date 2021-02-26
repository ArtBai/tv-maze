import { createAction } from '@reduxjs/toolkit'

export const fetchShowRequest = createAction('fetchShow:request', showId => ({ payload: { showId } }))
export const fetchShowSuccess = createAction('fetchShow:success', show => ({
  payload: { show },
}))
export const fetchShowFailure = createAction('fetchShow:failure', error => ({ error }))

export const fetchShowEpisodesRequest = createAction('fetchShowEpisodes:request', showId => ({
  payload: { showId },
}))
export const fetchShowEpisodesSuccess = createAction('fetchShowEpisodes:success', episodes => ({
  payload: { episodes },
}))
export const fetchShowEpisodesFailure = createAction('fetchShowEpisodes:failure', error => ({
  error,
}))
