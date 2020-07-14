import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class LogInForm extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.2)"
          style={style.input}
        />
        <TextInput placeholder="password" style={style.input} />
      </View>
    );
  }
}

const styles = StleSheet.create({
  container: {},
  input: {
    height: 40,
    backgroundColor: "red",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10,
  },
});
