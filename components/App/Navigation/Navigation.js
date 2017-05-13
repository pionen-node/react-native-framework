import { connectComponent } from '@pionen-node/react-native-framework/support';
import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';

class Navigation extends Component {
  static contextTypes = {
    config: PropTypes.shape({
      App: PropTypes.shape({
        Navigation: PropTypes.shape({
          stackNavigator: PropTypes.object.isRequired,
          stackRouter: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };
  constructor(props, context) {
    super(props, context);

    const {config} = context;
    const {stackRouter, stackNavigator} = config.App.Navigation;

    if (! React.isValidElement(this.Navigator)) {
      this.Navigator = this.constructor.Navigator || StackNavigator(stackRouter, stackNavigator);
    }
  }
  render() {
    const {Navigator} = this;

    return (
      <Navigator {...this.props} />
    );
  }
}

export default connectComponent({
  namespace: 'App.Navigation',
})(Navigation);