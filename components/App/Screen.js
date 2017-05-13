import { connectComponent } from '@pionen-node/react-native-framework/support';
import React, { Component } from 'react';

class Screen extends Component {
  static navigationOptions = {
    //
  };
  render() {
    return null;
  }
}

export default connectComponent({
  namespace: 'App.Screen',
})(Screen);