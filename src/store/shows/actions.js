import { createAction } from '@reduxjs/toolkit'

export const fetchShowsRequest = createAction('fetchShows:request')
export const fetchShowsSuccess = createAction('fetchShows:success', shows => ({
  payload: { shows },
}))
export const fetchShowsFailure = createAction('fetchShows:failure', error => ({ error }))
