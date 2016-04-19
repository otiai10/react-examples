import React, { Component } from 'react'

import Header from './Header'
import Game from './Game/Game'
import Logs from './Logs'
import Footer from './Footer'

class App extends Component {
  render() {
    return <div>
      <Header />
      <div className='container'>
        <div className='columns'>
          <Game />
          <Logs />
        </div>
      </div>
      <Footer />
    </div>;
  }
}

export default App;
