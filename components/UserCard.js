import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

import colors from '../constants/Colors';

export function UserCard(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.card}>
        <Image source={{ uri: props.profileAvatar }} style={styles.image} />
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.location}>{props.location}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    padding: 15,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.3
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  details: {
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 1,
    color: '#666'
  },
  location: {
    fontSize: 14,
    color: '#666'
  }
})
