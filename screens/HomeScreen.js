import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from "react-native";

import GradientContainer from '../components/GradientContainer';


import colors from '../constants/Colors';

import { MonoText } from '../components/StyledText';
import { Error } from '../components/Error';

import { navigationOptions } from '../utils/navigationOptions';

export default function HomeScreen() {
  const [state, setState] = useState({
    loading: false,
    text: '',
    data: [],
    error: false,
    errMsg: ''
  });

  const getUsers = async () => {
    if (state.text === '')
      return setState({
        ...state,
        error: true,
        errMsg: 'Please type user name first'
      });



  };
  return (
    <View style={styles.container}>
      <GradientContainer>
        <TextInput
          style={styles.input}
          onChangeText={text => setState({ ...state,error: false, text })}
          value={state.text}
          placeholder="Type user name here..."
          placeholderTextColor="#ddd"
        />
        <View style={styles.button}>
          <Button
            title="Search"
            color={colors.white}
            onPress={getUsers}
          />
        </View>
        <Error error={state.error} msg={state.errMsg} />
      </GradientContainer>
    </View>
  );
}

HomeScreen.navigationOptions = navigationOptions('Search User');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    marginTop: 10,
    borderColor: colors.inputBackground,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    color: colors.white
  },
  button: {
    height: 40,
    marginTop: 15,
    backgroundColor: colors.secondary,
    borderRadius: 4
  }
});
