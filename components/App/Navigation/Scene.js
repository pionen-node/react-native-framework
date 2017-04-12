import React, { Component, PropTypes } from 'react';

export default class AppNavigationScene extends Component {
  static childContextTypes = {
    navigationScene: PropTypes.object.isRequired,
  };
  static contextTypes = {
    config: PropTypes.shape({
      navigation: PropTypes.shape({
        scene: PropTypes.shape({
          router: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.objectOf(PropTypes.oneOfType([
              PropTypes.func,
              PropTypes.element,
            ]))
          ]).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };
  static propTypes = {
    sceneState: PropTypes.shape({
      scene: PropTypes.shape({
        route: PropTypes.shape({
          key: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };
  getChildContext() {
    return {
      navigationScene: this,
    }
  }
  render() {
    return this.renderRouter();
  }
  renderRouter() {
    const {sceneState} = this.props;
    const {route} = sceneState.scene;

    if (_.isFunction(route.renderScene)) {
      return route.renderScene(route, sceneState);
    }

    const {router} = this.context.config.navigation.scene;

    if (_.isFunction(router)) {
      return router(route, sceneState);
    }

    const routeName = route.name || route.key;

    if (router[routeName]) {
      if (_.isFunction(router[routeName])) {
        return router[routeName](route, sceneState);
      } else {
        return router[routeName];
      }
    }

    throw new Error(`Undefined scene on router: ${routeName}`);
  }
}