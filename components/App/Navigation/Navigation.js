import React, { Component, PropTypes } from 'react';
import { BackAndroid, NavigationExperimental, Platform } from 'react-native';

import NavigationScene from './Scene';

const {CardStack, StateUtils} = NavigationExperimental;

export default class AppNavigation extends Component {
  static childContextTypes = {
    navigation: PropTypes.object.isRequired,
  };
  static contextTypes = {
    config: PropTypes.shape({
      navigation: PropTypes.shape({
        initialState: PropTypes.shape({
          index: PropTypes.number.isRequired,
          routes: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
          })).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };
  constructor(props, context) {
    super(props, context);

    this.state = {
      navigation: context.config.navigation.initialState || {
        index: 0,
        routes: [],
      },
    };
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        return this.navigate('back');
      });
    }
  }
  getChildContext() {
    return {
      navigation: this,
    }
  }
  render() {
    const {navigation: navigationState} = this.state;

    return (
      <CardStack
        onNavigateBack={() => this.navigate('back')}
        navigationState={navigationState}
        renderScene={(sceneState) => this.renderScene(sceneState)}
      />
    );
  }
  renderScene(sceneState) {
    return <NavigationScene {...{sceneState}} />;
  }
  navigate(type, data) {
    let navigationState = this.state.navigation;
    const {routes} = navigationState;

    switch (type) {
      case 'back':
        navigationState = StateUtils.pop(navigationState);
        break;
      case 'push':
        if (_.isString(data)) {
          data = {
            name: data,
          };
        }
        if (_.isUndefined(data.key)) {
          data.key = `${data.name}_${routes.length}`;
        }

        navigationState = StateUtils.push(navigationState, data);
        break;
    }

    if (this.state.navigation !== navigationState) {
      this.setState({
        navigation: navigationState,
      });
    }
  }
}