import reducer from '../reducer'
import * as actions from '../actions'

describe('shows reducer', () => {
  it('fetchShowsRequest', () => {
    const state = reducer(undefined, actions.fetchShowsRequest())

    expect(state).toStrictEqual({
      shows: [],
      isLoadingShows: true,
    })
  })

  it('fetchShowsSuccess', () => {
    const shows = [
      { id: 'one', name: 'One' },
      { id: 'two', name: 'Two' },
      { id: 'three', name: 'Three' },
    ]
    const state = reducer(undefined, actions.fetchShowsSuccess(shows))

    expect(state).toStrictEqual({
      shows,
      isLoadingShows: false,
    })
  })

  it('fetchShowsFailure', () => {
    const error = new Error()
    const state = reducer(undefined, actions.fetchShowsFailure(error))

    expect(state).toStrictEqual({
      shows: [],
      isLoadingShows: false,
    })
  })
})
