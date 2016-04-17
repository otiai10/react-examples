import React, { Component } from 'react'

class UFO extends Component {
  render() {
    let style = {
      width: '80px',
      height: '80px',
      backgroundColor: 'red',
      position: 'absolute',
      top: this.props.position.top + 'px',
      left: this.props.position.left + 'px'
    }
    return <div style={style}></div>
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
      <UFO position={this.props.position} />
    </div>
  }
}

export default Display
