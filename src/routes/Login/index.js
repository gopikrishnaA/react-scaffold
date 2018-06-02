import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sampleAction, onLikeAction, goToSummery } from 'models/sample'
import { IMAGES_FORMAT } from 'utilties/util'

import './App.css'

class Pure extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFile: '',
      error: ''
    }
    this.fileChangedHandler = this.fileChangedHandler.bind(this)
  }
  componentWillMount () {
    this.props.updateSampleAction()
  }
  fileChangedHandler (event) {
    event.preventDefault()
    const file = event.target.files[0]
    if (file && ~Object.values(IMAGES_FORMAT).indexOf(file.type)) {
      let reader = new FileReader() // eslint-disable-line
      reader.onloadend = () => {
        this.setState({
          selectedFile: reader.result,
          error: ''
        })
      }
      reader.readAsDataURL(file)
    } else {
      this.setState({
        selectedFile: '',
        error: 'UnSupported image'
      })
    }
  }
  render () {
    const {
      id,
      joke,
      like,
      items,
      navigate
    } = this.props
    const {
      selectedFile,
      error
    } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>{joke}</h1>
          <div className='App-button' >
            <button data-qa='like' onClick={() => like({ id, joke, status: 'Like' })}>Like</button>
            <button data-qa='unlike' onClick={() => like({ id, joke, status: 'Unlike' })}>Unlike</button>
            <button data-qa='summery' disabled={Object.keys(items).length < 1} onClick={() => navigate()} >Summery</button>
            <input data-qa='fileUpload' type='file' accept='image/*' onChange={this.fileChangedHandler} />
            <div >
              {selectedFile && <img data-qa='img' src={selectedFile} width='50px' height='60px' />}
              {error && <span data-qa='error' >{error}</span>}
            </div>
          </div>
        </header>
      </div>
    )
  }
}

const state = ({ login }) => ({
  joke: login.joke,
  id: login.id,
  items: login.items
})

const dispatch = (dispatch) => ({
  updateSampleAction: () => dispatch(sampleAction()),
  like: ({ id, joke, status }) => dispatch(onLikeAction({ id, joke, status })),
  navigate: () => dispatch(goToSummery())
})

Pure.propTypes = {
  joke: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired
}

export const LoginPage = connect(state, dispatch)(Pure)
