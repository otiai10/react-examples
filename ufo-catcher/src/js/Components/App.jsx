import React, { Component } from 'react'

import Header from './Header'
import Game from './Game/Game'
import Logs from './Logs'
import Footer from './Footer'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    return <div>
      <Header />
      <div className='container'>
        <div className='columns'>
          <Game position={this.props.position} />
          <Logs logs={this.props.logs}/>
        </div>
      </div>
      <Footer />
    </div>;
  }
}

App = connect((state) => {
  return {
    position: {top: state.position.top, left: state.position.left},
    logs: state.logs
  }
})(App)

export default App;
