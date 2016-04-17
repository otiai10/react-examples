import React, { Component } from 'react'

import Header from './Header'
import Game from './Game/Game'
import Footer from './Footer'

class App extends Component {
  render() {
    return <div>
      <Header />
      <div className='container'>
        <div className='columns'>
          <Game />
        </div>
      </div>
      <Footer />
    </div>;
  }
}

export default App;
