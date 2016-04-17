import React, { Component } from 'react'

import Display from './Display'
import Controller from './Controller'

class Game extends Component {
  render() {
    return <div className='column is-8'>
      <div className='columns'>
        <Display />
      </div>
      <div className='columns'>
        <Controller />
      </div>
    </div>;
  }
}

export default Game;
