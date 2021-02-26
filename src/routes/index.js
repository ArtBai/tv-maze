import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Shows from 'modules/Shows/Shows'
import Show from 'modules/Show/Show'
import Episode from 'modules/Episode/Episode'

const Routes = () => (
  <Switch>
    <Route path="/shows/:showId/:episodeId" component={Episode} />
    <Route path="/shows/:showId" component={Show} />
    <Route path="/shows" component={Shows} />
    <Redirect from="/" to="/shows" />
  </Switch>
)

export default Routes
