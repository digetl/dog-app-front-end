import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <View style={StyleSheet.logoContainer}></View>
        <Image style={styles.logo} source={require("./assets/dogMock1.png")} />

        <Text style={styles.title} Some text here></Text>

        <View style={StyleSheet.formContainer}></View>
      </View>
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
});
