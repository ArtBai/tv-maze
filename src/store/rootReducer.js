import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import shows from './shows/reducer'
import show from './show/reducer'
import episode from './episode/reducer'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  shows,
  show,
  episode,
})

export { history }

export default reducer
