import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import LogInForm from "./LogInForm";

export default class LoginScreen extends Component {
  render() {
    return (
      //   <KeyboardAvoidingView behavior="padding" style={StyleSheet.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.title}> Who Let The Dogs Out!</Text>
        </View>
        <View style={styles.formContainer}>
          <LogInForm />
        </View>
      </View>
      //   </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19a79c",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.7,
  },
});
