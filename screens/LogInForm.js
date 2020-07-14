import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class LogInForm extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={style.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7"
          returnKeyType="go"
          style={style.input}
          ref={(input) => (this.passwordInput = input)}
        />

        <TouchableOpacity style={style.buttonContainer}>
          <Text stype={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
  },
});
