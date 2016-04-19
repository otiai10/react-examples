import React, { Component } from 'react'
import { connect } from 'react-redux'

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

Logs = connect((state) => {
  return { logs: state.logs }
})(Logs)

export default Logs
