import React, { Component } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import LogInForm from "./LogInForm";

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={StyleSheet.container}>
        <View style={StyleSheet.logoContainer}></View>
        {/* <Image style={styles.logo} source={require()} /> */}

        <Text style={styles.title} Some text here></Text>

        <View style={StyleSheet.formContainer}>
          <LogInForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    color: "#fff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.6,
  },
  formContainer: {},
});
