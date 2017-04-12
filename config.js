import React from 'react';

import { nativeBase } from './themes';

export default {
  container: {
    theme: {
      ...nativeBase,
      //
    },
  },
  navigation: {
    initialState: {
      index: 0,
      routes: [{key: 'home'}],
    },
    scene: {
      router: {
        //
      },
    }
  },
  storage: {
    sessionKey: 'LookApp:Storage',
  },
};