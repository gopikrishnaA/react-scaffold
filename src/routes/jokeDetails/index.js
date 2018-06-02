import React, { Component } from 'react'
import { connect } from 'react-redux'

import { onLikeAction, goToSummery } from 'models/sample'

import '../Login/App.css'

class Pure extends Component {
  render () {
    const {
      items,
      navigate,
      match: { params: { id } },
      like
    } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 data-qa='header' className='App-title'>{items[id] && items[id].joke}</h1>
          <div className='App-button' >
            <button onClick={() => like({ id, joke: items[id].joke, status: 'Like' })}>Like</button>
            <button onClick={() => like({ id, joke: items[id].joke, status: 'Unlike' })}>Unlike</button>
            <button disabled={items.length < 1} onClick={() => navigate()} >Summery</button>
          </div>
        </header>
      </div>
    )
  }
}

const state = ({ login }) => ({
  items: login.items
})

const dispatch = (dispatch) => ({
  like: ({ id, joke, status, route }) => dispatch(onLikeAction({ id, joke, status, route: 'login' })),
  navigate: () => dispatch(goToSummery())
})

export const jokeDetails = connect(state, dispatch)(Pure)
