import React, { Component, PropTypes } from 'react';

import Drawer from '../Drawer';
import Navigation from './Navigation/Navigation';

export default class App extends Component {
  static childContextTypes = {
    app: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
  };
  static propTypes = {
    config: PropTypes.object.isRequired,
  };
  constructor(props, context) {
    super(props, context);

    this.state = {
      config: props.config,
    }
  }
  getChildContext() {
    const app = this;

    return {
      app,
      config: app.config,
    }
  }
  render() {
    const {theme} = this.config.container;

    return (
      <Drawer
        renderSidebar={() => this.renderSidebar()}
        style={{backgroundColor: theme.variables.btnDisabledClr}}>
        <Navigation />
      </Drawer>
    );
  }
  renderSidebar() {
    return null;
  }
  get config() {
    return this.state.config;
  }
  set config(config) {
    this.setState({
      config,
    });
  }
}