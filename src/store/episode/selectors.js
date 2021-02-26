import { createSelector } from '@reduxjs/toolkit'

export const initialState = {
  episode: {},
  isLoadingEpisode: false,
}

const rootSelector = ({ episode }) => episode

export const episodeSelector = createSelector([rootSelector], ({ episode }) => episode)

export const isLoadingEpisodeSelector = createSelector(
  [rootSelector],
  ({ isLoadingEpisode }) => isLoadingEpisode,
)
