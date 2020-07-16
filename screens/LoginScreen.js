import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import LoginForm from "../components/LoginForm";


import {useSelector} from "react-redux"


const LoginScreen = ({navigation}) => {

  const loginStatus = useSelector(state => state.login)


  const error = () => {
      return (
        <Text>Username or Password Incorrect</Text>
      )
  }


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require("../assets/dog2.png")} /> */}
        {!loginStatus.error ? <Text style={styles.title}> Who Let The Dogs Out!</Text> : null}
        {loginStatus.error ? error() : null}
      </View>

      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen

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
