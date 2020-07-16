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
        <>
        <View style={styles.errorLogo}>
          <Image source={require('../assets/error.png')} />
        </View>
        <Text style={styles.computerSaysNo}>Username or Password Incorrect</Text>
        </>
      )
  }


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require("../assets/dog2.png")} /> */}
        {!loginStatus.error ? <View style={styles.imagesBlock}>
        <View style={styles.logo}>
          <Image source={require('../assets/nbfLogo.png')} />
        </View>
      </View> : null}
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
    backgroundColor: "#66A5C7",
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
  logo: {
    padding: 10,
    justifyContent: 'center',
  },
  errorLogo: {
    padding: 10,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  computerSaysNo: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  }
});
