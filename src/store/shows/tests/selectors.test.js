import * as selectors from '../selectors'

describe('shows selectors', () => {
  const state = {
    shows: {
      shows: [
        { id: 'one', name: 'One' },
        { id: 'two', name: 'Two' },
        { id: 'three', name: 'Three' },
      ],
    },
  }

  it('showsSelector', () => {
    const data = selectors.showsSelector(state)

    expect(data).toStrictEqual([
      { id: 'one', name: 'One' },
      { id: 'two', name: 'Two' },
      { id: 'three', name: 'Three' },
    ])
  })
})
