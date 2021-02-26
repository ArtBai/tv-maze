import reducer from '../reducer'
import * as actions from '../actions'

describe('show reducer', () => {
  it('fetchShowsRequest', () => {
    const showId = 'show'
    const state = reducer(undefined, actions.fetchShowRequest(showId))

    expect(state).toStrictEqual({
      show: {},
      episodes: [],
      isLoadingShow: true,
      isLoadingEpisodes: false,
    })
  })

  it('fetchShowsSuccess', () => {
    const show = {
      id: 'show',
      name: 'Show',
    }
    const state = reducer(undefined, actions.fetchShowSuccess(show))

    expect(state).toStrictEqual({
      show,
      episodes: [],
      isLoadingShow: false,
      isLoadingEpisodes: false,
    })
  })

  it('fetchShowsFailure', () => {
    const error = new Error()
    const state = reducer(undefined, actions.fetchShowFailure(error))

    expect(state).toStrictEqual({
      show: {},
      episodes: [],
      isLoadingShow: false,
      isLoadingEpisodes: false,
    })
  })

  it('fetchShowEpisodesRequest', () => {
    const showId = 'show'
    const state = reducer(undefined, actions.fetchShowEpisodesRequest(showId))

    expect(state).toStrictEqual({
      show: {},
      episodes: [],
      isLoadingShow: false,
      isLoadingEpisodes: true,
    })
  })

  it('fetchShowEpisodesSuccess', () => {
    const episodes = [
      { id: 'ep1', name: 'Episode 1' },
      { id: 'ep2', name: 'Episode 2' },
      { id: 'ep3', name: 'Episode 3' },
    ]
    const state = reducer(undefined, actions.fetchShowEpisodesSuccess(episodes))

    expect(state).toStrictEqual({
      show: {},
      episodes,
      isLoadingShow: false,
      isLoadingEpisodes: false,
    })
  })

  it('fetchShowEpisodesFailure', () => {
    const error = new Error()
    const state = reducer(undefined, actions.fetchShowEpisodesFailure(error))

    expect(state).toStrictEqual({
      show: {},
      episodes: [],
      isLoadingShow: false,
      isLoadingEpisodes: false,
    })
  })
})
