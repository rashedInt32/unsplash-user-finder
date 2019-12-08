import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen
  },
  config
);


const AppContainer = createAppContainer(MainStack);

export default AppContainer;
