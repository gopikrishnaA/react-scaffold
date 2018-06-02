import React, { Component } from 'react';
import './App.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sample key {this.props.sampleKey}</h1>
          <button onClick={() => this.props.updateSampleAction()}>button</button>
        </header>
      </div>
    );
  }
}

export default LoginPage;