import React, {Component} from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    setInterval(() => this.tick(), 1000)
  }
  render() {
    return <h1 style={this.stupidStyle()}>{this.state.count}</h1>;
  }
  tick() {
    this.setState({count: this.state.count+1})
  }
  stupidStyle() { // 3がつく数字のときはとくべつなstyleを返す
    if (this.isStupid()) return {color: 'red', fontFamily: 'fantasy'}
    else return {}
  }
  isStupid() {
    return String(this.state.count).match('3') || (this.state.count != 0 && this.state.count%3 == 0)
  }
}
export default Foo;
