import { Component } from 'react';
import PropTypes from 'prop-types';

export default class StateProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {};

  render() {
    const { children } = this.props;

    return children({
      state: this.state,
      setState: this.setState.bind(this),
    });
  }
}
