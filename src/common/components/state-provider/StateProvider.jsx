import { Component } from 'react';

export default class StateProvider extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children({
      state: this.state,
      setState: this.setState.bind(this),
    });
  }
}
