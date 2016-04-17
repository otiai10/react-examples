import React, { Component } from 'react'


class Controller extends Component {
  render() {
    return <div className='column'>

      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter button is-primary">うえ</div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-half button is-primary">ひだり</div>
        <div className="column is-half button is-primary">みぎ</div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter button is-primary">した</div>
      </div>

    </div>;
  }
}

export default Controller
