import React from 'react';
import { View, Text } from 'react-native';
import { navigationOptions } from '../utils/navigationOptions';

export default function UserScreen() {
  return (
    <View>
      <Text>UserProfile</Text>
    </View>
  )
}

UserScreen.navigationOptions = navigationOptions("User");
