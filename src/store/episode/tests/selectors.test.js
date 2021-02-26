import * as selectors from '../selectors'

describe('episode selectors', () => {
  const state = {
    episode: {
      episode: {
        id: 'hello',
        name: 'Hello',
      },
    },
  }

  it('showsSelector', () => {
    const data = selectors.episodeSelector(state)

    expect(data).toStrictEqual({
      id: 'hello',
      name: 'Hello',
    })
  })
})
