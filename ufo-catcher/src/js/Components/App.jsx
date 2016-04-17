import React, { Component } from 'react'

import Header from './Header'
import Game from './Game/Game'
import Footer from './Footer'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    return <div>
      <Header />
      <div className='container'>
        <div className='columns'>
          <Game position={this.props.position} />
        </div>
      </div>
      <Footer />
    </div>;
  }
}

App = connect((state) => {
  console.log("[debug:001]", "dispatchしたけっかここに来て欲しいんだけどなー");
  return {
    position: {top: state.position.top, left: state.position.left}
  }
})(App)

export default App;
