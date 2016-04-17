import React, { Component } from 'react'

import { connect } from 'react-redux'

class Controller extends Component {
  render() {
    this.state = {hoge: 10}
    return <div className='column'>

      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <button className="button" onClick={() => this.onClick('UP')}>うえ</button>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-half"><button className="button" onClick={() => this.onClick('left')}>ひだり</button></div>
        <div className="column is-half"><button className="button" onClick={() => this.onClick('right')}>みぎ</button></div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <button className="button" onClick={() => this.onClick('down')}>した</button>
        </div>
      </div>

    </div>;
  }
  onClick(direction) {
    this.props.dispatch({type: 'MOVE', direction})
  }
}

export default connect()(Controller)
