import { connectComponent } from '@pionen-node/react-native-framework/support';
import React, { Component, PropTypes } from 'react';

class ConfigProvider extends Component {
  static childContextTypes = {
    config: PropTypes.object.isRequired,
  };
  static defaultProps = {
    config: {},
  };
  static propTypes = {
    config: PropTypes.object.isRequired,
  };
  constructor(props, context) {
    super(props, context);

    const {config} = props;

    this.state = {
      config,
    }
  }
  componentWillReceiveProps({config}) {
    if (config !== this.props.config) {
      this.setState({
        config,
      });
    }
  }
  getChildContext() {
    const {config} = this.props;

    return {
      config,
    }
  }
  render() {
    return this.props.children || null;
  }
}

export default connectComponent({
  namespace: 'App.ConfigProvider',
})(ConfigProvider);