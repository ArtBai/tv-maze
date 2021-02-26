import * as selectors from '../selectors'

describe('show selectors', () => {
  const state = {
    show: {
      show: {
        id: 'show',
        name: 'Show',
      },
      episodes: [
        { id: 'ep1', name: 'Episode 1' },
        { id: 'ep3', name: 'Episode 2' },
        { id: 'ep2', name: 'Episode 3' },
      ],
    },
  }

  it('showSelector', () => {
    const data = selectors.showSelector(state)

    expect(data).toStrictEqual({
      id: 'show',
      name: 'Show',
    })
  })

  it('episodesSelector', () => {
    const data = selectors.episodesSelector(state)

    expect(data).toStrictEqual([
      { id: 'ep1', name: 'Episode 1' },
      { id: 'ep3', name: 'Episode 2' },
      { id: 'ep2', name: 'Episode 3' },
    ])
  })
})
