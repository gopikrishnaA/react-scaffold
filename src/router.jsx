import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'
import { history } from 'store'

import Loading from 'components/Loading'
import { LoginPage } from 'routes/Login'
import { Summery } from 'routes/Summery'
import { jokeDetails } from 'routes/jokeDetails'

export default () => {
  return (
    <Router history={history}>
      <div>
        <Loading />
        <Route path='/' render={() => (<Redirect to='/login' />)} />
        <Route path='/login' component={LoginPage} />
        <Route path='/summery' component={Summery} />
        <Route path='/joke/:id' component={jokeDetails} />
      </div>
    </Router>
  )
}
