import React, { Component, PropTypes } from 'react';

import config from '../../config';
import { connectComponent } from '../../support';
import {
  ConfigProvider as AppConfigProvider,
  Navigation as AppNavigation,
  StyleProvider as AppStyleProvider,
} from './index';

class App extends Component {
  static childContextTypes = {
    app: PropTypes.object.isRequired,
  };
  static propTypes = {
    config: PropTypes.object,
  };
  getChildContext() {
    const app = this;

    return {
      app,
    }
  }
  render() {
    const config = _.merge({}, this.constructor.config, this.props.config);

    return (
      <AppConfigProvider {...{config}}>
        <AppStyleProvider>
          {this.renderNavigation()}
        </AppStyleProvider>
      </AppConfigProvider>
    );
  }
  renderNavigation() {
    return <AppNavigation />;
  }
}

export default connectComponent({
  config,
  namespace: 'PionenApp',
})(App);