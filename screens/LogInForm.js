import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
// import { TextInput } from "react-native-gesture-handler";

export default class LogInForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle="light-content" /> */}
        <TextInput
          style={styles.input}
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          // returnKeyType="next"
          // onSubmitEditing={() => this.passwordInput.focus()}
          // keyboardType="email-address"
          // autoCapitalize="none"
          // autoCorrect={false}
          // style={style.input}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          // returnKeyType="go"
          // style={style.input}
          // ref={(input) => (this.passwordInput = input)}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text stype={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 15,
    color: "#FFFF",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#177e76",
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
