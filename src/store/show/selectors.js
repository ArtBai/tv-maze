import { createSelector } from '@reduxjs/toolkit'

export const initialState = {
  show: {},
  episodes: [],
  isLoadingShow: false,
  isLoadingEpisodes: false,
}

const rootSelector = ({ show }) => show

export const showSelector = createSelector([rootSelector], ({ show }) => show)

export const episodesSelector = createSelector([rootSelector], ({ episodes }) => episodes)

export const isLoadingShowSelector = createSelector(
  [rootSelector],
  ({ isLoadingShow }) => isLoadingShow,
)

export const isLoadingEpisodesSelector = createSelector(
  [rootSelector],
  ({ isLoadingEpisodes }) => isLoadingEpisodes,
)
