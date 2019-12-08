import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    User: UserScreen,
  },
  config
);



export default MainStack;
