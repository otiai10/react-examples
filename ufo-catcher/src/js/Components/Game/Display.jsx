import React, { Component } from 'react'

class UFO extends Component {
  render() {
    let style = {
      width: '80px',
      height: '80px',
      backgroundColor: 'red',
      position: 'absolute'
    }
    return <div style={style}>

    </div>
  }
}

class Display extends Component {
  render() {
    let style = {
      backgroundColor: 'white',
      height: '400px',
      position: 'relative'
    }
    return <div className='column' style={style}>
      <UFO />
    </div>
  }
}

export default Display
