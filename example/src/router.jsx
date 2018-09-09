import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './routes/HomePage'

export default () => {
  return (
    <Router >
      <div>
        <App />
        <Route path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' component={HomePage} />
        <Route path='/appeals' component={HomePage} />
        <Route path='/billing' component={HomePage} />
        <Route path='/claims' component={HomePage} />
        <Route path='/benefits' component={HomePage} />
        <Route path='/enrollment' component={HomePage} />
      </div>
    </Router>
  )
}
