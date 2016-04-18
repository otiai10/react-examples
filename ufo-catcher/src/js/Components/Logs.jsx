import React, { Component } from 'react'

class Logs extends Component {
  render() {
    return <div className="column">
      <p>Action Logs</p>
      <code>
        {this.props.logs.map((log, i) => {
          return <p key={i}>{JSON.stringify(log)}</p>
        })}
      </code>
    </div>;
  }
}

export default Logs
