import React, { Component, useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";

import userService from "../apiService/userService"
import { useSelector, useDispatch } from "react-redux"
import { loginUser, loginError } from "../actions/loginAction"
import { useNavigation } from "@react-navigation/native";
// import { TextInput } from "react-native-gesture-handler";

const LoginForm = () => {

  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigator = useNavigation()

  const handleLogin = () => {
    userService.postUserLogin({
      "username": username,
      "password": password
    })
     .then(res => {
       if (res.error){
        dispatch(loginError({error: "Username or Password Incorrect"}))
       } 
       if (res.username) {
         console.log("Success");
         
        dispatch(loginUser(res))
        navigator.navigate("HomeScreen")
       }
     })
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TextInput
        placeholder="Enter User Name"
        placeholderTextColor="rgba(255,255,255,0.7)"
        // returnKeyType="next"
        // onSubmitEditing={() => this.passwordInput.focus()}
        onChangeText={text => setUsername(text)}
        // keyboardType="email-address"
        // autoCapitalize="none"
        // autoCorrect={false}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        returnKeyType="go"
        style={styles.input}
        // ref={(input) => (this.passwordInput = input)}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#383732",
    
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
