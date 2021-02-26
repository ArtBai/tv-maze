import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import Routes from 'routes'
import GlobalStyle from './styles'

const App = () => (
  <>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
    <GlobalStyle />
  </>
)

export default App
