import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard
} from "react-native";

import colors from "../constants/Colors";
import { navigationOptions } from "../utils/navigationOptions";
import { searchUser } from "../api";

import { GradientContainer } from "../components/GradientContainer";
import { Error } from "../components/Error";
import { UserCard } from "../components/UserCard";

export default function HomeScreen({navigation}) {
  const [state, setState] = useState({
    loading: false,
    text: "",
    data: [],
    error: false,
    errMsg: "",
    isEmpty: false
  });

  const getUsers = async () => {
    if (state.text === "")
      return setState({
        ...state,
        error: true,
        errMsg: "Please type user name first"
      });

    Keyboard.dismiss();

    const [err, response] = await searchUser(state.text);
    if (err) return err.response;
    if (response.data.total === 0)
      return setState({ ...state, isEmpty: true });

    setState({
      ...state,
      error: false,
      isEmpty: false,
      data: response.data.results
    });
  };

  const goToUserPage = user => {
    console.log(user);
    navigation.push("User");
  }

  return (
    <View style={styles.container}>
      <GradientContainer>
        <View style={{ padding: 15 }}>
          <TextInput
            style={styles.input}
            onChangeText={text => setState({ ...state, error: false, isEmpty: false, text })}
            value={state.text}
            placeholder="Type user name here..."
            placeholderTextColor="#ddd"
          />
          <View style={styles.button}>
            <Button title="Search" color={colors.white} onPress={getUsers} />
          </View>
          <Error error={state.error} msg={state.errMsg} />
        </View>

        <ScrollView style={styles.scrollView}>
          {state.data.length > 0 &&
            state.data.map(user => {
              return (
                <UserCard
                  onPress={() => goToUserPage(user)}
                  key={user.id}
                  profileAvatar={user.profile_image.large}
                  name={user.name}
                  location={user.location}
                />
              );
            })}
          {state.isEmpty ? (
            <Text style={styles.emptyText}>No user found on this name {state.text}</Text>
          ) : null}
        </ScrollView>
      </GradientContainer>
    </View>
  );
}

HomeScreen.navigationOptions = navigationOptions("Search User");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
    padding: 15,
    paddingTop: 0,
    paddingBottom: 40
  },
  emptyText: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.white
  }
});
