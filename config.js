import React from 'react';

import { App as AppScreen } from './components/App';
import { app } from './themes';

export default {
  App: {
    Navigation: {
      screenProps: {
        //
      },
      stackNavigator: {
        initialRouteName: 'Home',
        initialRouteParams: {
          //
        },
      },
      stackRouter: {
        Home: {
          screen: AppScreen,
        }
      },
    },
    storage: {
      sessionKey: 'PionenApp:Storage',
    },
    theme: app,
  },
};