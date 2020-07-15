import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import WideBox from "../styled-components/WideBox";
import Logo from "../styled-components/Logo";
import WideButton from "../styled-components/WideButton";
import { Button } from "react-native";
import Footer from "../components/Footer";
import Constants from 'expo-constants';


import SingleArticle from "../articles/SingleArticle";

const HomeScreen = ({ navigation }) => {
  const onPressFindScreen = () => navigation.navigate("FindScreen");
  const onPressArticles = () => navigation.navigate("Articles");
  const onPressProfile = () => navigation.navigate("Profile");
  const onPressLocalServices = () => navigation.navigate("LocalServices");
  const onPressHomeScreen = () => navigation.navigate("HomeScreen");

  return (
    <>
    <SafeAreaView style={styles.homeView}>
      
      <View style={styles.logo}>
        <Image source={require('../assets/nbfLogo.png')} />
      </View>

      <View style={styles.logo} >
        <Image source={require('../assets/lineup.png')} />
      </View>
       
      <TouchableOpacity style={styles.buttonRow, styles.greenrow} onPress={onPressFindScreen}>
        <Text style={styles.buttonText}>Find your next best friend</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRow, styles.mintrow} onPress={onPressArticles}>
        <Text style={styles.buttonText}>Articles</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow, styles.tanrow} onPress={onPressProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow, styles.darktanrow} onPress={onPressLocalServices}>
          <Text style={styles.buttonText}>Local Services</Text>
        </TouchableOpacity>
    
        <Footer onPress={onPressHomeScreen}></Footer>

      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({

  homeView: {
    backgroundColor: "#66a5c7",
    flex:1,
    flexDirection: "column",
  },

  logo: {
    padding: 10,
  },

  buttonRow: {
    flex:1,
    flexDirection: "row",  
    justifyContent: 'center',
  },

  buttonText: {
    fontSize:24,
    fontWeight: "bold",
    color: "#fff",
    paddingTop:20,
    paddingBottom:20,
    textAlign: "center",
  },

  greenrow: {
    backgroundColor: "#326d67"},

   mintrow: {
     backgroundColor: "#4da49c"},
 
     tanrow: {
     backgroundColor: "#d8955a"},

     darktanrow: {
      backgroundColor: "#d07a38"},
});

export default HomeScreen;
