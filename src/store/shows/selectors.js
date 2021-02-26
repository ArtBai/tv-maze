import { createSelector } from '@reduxjs/toolkit'

export const initialState = {
  shows: [],
  isLoadingShows: false,
}

const rootSelector = ({ shows }) => shows

export const showsSelector = createSelector([rootSelector], ({ shows }) => shows)

export const isLoadingShowsSelector = createSelector(
  [rootSelector],
  ({ isLoadingShows }) => isLoadingShows,
)
