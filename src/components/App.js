import React, { Component } from 'react'
import UserSignUp from './UserSignUp'
import Login from './Login'
import logo from '../logo.svg'
// import './stylesheets/App.scss'

import User from './User'
import Gallery from './Gallery'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>It Do Curate</h2>
        </div>
        <UserSignUp />
        <Login />
        <User />
        <Gallery/>
      </div>
    )
  }
}

export default App
