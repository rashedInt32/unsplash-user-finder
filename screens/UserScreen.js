import React from 'react';
import { View, Image, Text, StyleSheet } from "react-native";
import { navigationOptions } from '../utils/navigationOptions';

import { GradientContainer } from "../components/GradientContainer";
import { ScrollView } from 'react-native-gesture-handler';

export default function UserScreen({navigation}) {
  const { user } = navigation.state.params;

  return (
    <View style={styles.container}>
      <GradientContainer>
        <ScrollView style={styles.scrollview}>
          <Image
            source={{ uri: user.profile_image.large }}
            style={styles.image}
          />
          <Text style={styles.name}>{user.name}</Text>
        </ScrollView>
      </GradientContainer>
    </View>
  );
}

UserScreen.navigationOptions = navigationOptions('user');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4
  },
  scrollview: {
    padding: 15,
  },
  name: {
    fontSize: 30,
    color: '#fff'
  }
})
