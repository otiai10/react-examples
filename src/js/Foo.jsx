import React, {Component} from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    setInterval(() => this.tick(), 1000)
  }
  render() {
    return <h1 style={this.stupid()}>{this.state.count}</h1>;
  }
  tick() {
    this.setState({count: this.state.count+1})
  }
  stupid() { // 3がつく数字のときはとくべつなstyleを返す
    if (String(this.state.count).match('3'))
     return {color: 'red', fontFamily: 'fantasy'}
    else return {}
  }
}
export default Foo;
