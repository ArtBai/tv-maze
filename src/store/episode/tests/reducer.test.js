import reducer from '../reducer'
import * as actions from '../actions'

describe('episode reducer', () => {
  it('fetchEpisodeRequest', () => {
    const episodeId = 'hello'
    const state = reducer(undefined, actions.fetchEpisodeRequest(episodeId))

    expect(state).toStrictEqual({
      episode: {},
      isLoadingEpisode: true,
    })
  })

  it('fetchEpisodeSuccess', () => {
    const episode = {
      id: 'hello',
      name: 'Hello',
    }
    const state = reducer(undefined, actions.fetchEpisodeSuccess(episode))

    expect(state).toStrictEqual({
      episode,
      isLoadingEpisode: false,
    })
  })

  it('fetchEpisodeFailure', () => {
    const error = new Error()
    const state = reducer(undefined, actions.fetchEpisodeFailure(error))

    expect(state).toStrictEqual({
      episode: {},
      isLoadingEpisode: false,
    })
  })
})
