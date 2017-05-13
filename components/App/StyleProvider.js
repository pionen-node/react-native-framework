import { connectComponent } from '@pionen-node/react-native-framework/support';
import { StyleProvider as ShoutemStyleProvider } from '@shoutem/theme';
import React, { Component, PropTypes } from 'react';

class StyleProvider extends Component {
  static contextTypes = {
    config: PropTypes.shape({
      App: PropTypes.shape({
        theme: PropTypes.object.isRequired,
      }),
    }).isRequired,
  };
  render() {
    const {config} = this.context;

    return (
      <ShoutemStyleProvider style={config.App.theme}>
        {this.props.children || null}
      </ShoutemStyleProvider>
    );
  }
}

export default connectComponent({
  namespace: 'App.StyleProvider',
})(StyleProvider);