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
    <SafeAreaView style={styles.container1}>
      
      <WideBox>
        <Logo>
          <WideButton style={styles.blueButton2}>
            
              <Image style={styles.mainButton} source={require('../assets/nbfLogo.png')} />
		        
          </WideButton>
        </Logo>
      </WideBox>

     
        <View style={styles.widebutton2}>
         
            <Image style={styles.image1} source={require('../assets/lineup.png')} />
        
        </View>
      

      <TouchableOpacity style={styles.blueButton} onPress={onPressFindScreen}>
        <WideButton>
          <View style={styles.wideButton}>
            <Text style={styles.buttonText}>Find your next best friend</Text>
          </View>
        </WideButton>
      </TouchableOpacity>

      <TouchableOpacity style={styles.mintButton} onPress={onPressArticles}>
        <WideButton>
          <View style={styles.wideButton}>
            <Text style={styles.buttonText}>Articles</Text>
          </View>
        </WideButton>
      </TouchableOpacity>

      <View style={styles.smallIconContainer}>

        <TouchableOpacity style={styles.leftBox} onPress={onPressProfile}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightBox} onPress={onPressLocalServices}>
            <View style={styles.button2}>
              <Text style={styles.buttonText}>Local Services</Text>
            </View>
        </TouchableOpacity>

        

      </View>
      
      <Footer onPress={onPressHomeScreen}></Footer>
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  smallIconContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  leftBox: {
    backgroundColor: "#e3924e",
    alignItems: "center",
    margin: 0,
    width: "50%",
  },
  rightBox: {
    backgroundColor: "#dd7622",
    alignItems: "center",
    margin: 0,
    width: "50%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  button1: {
    width: "100%",
    height: 120,
    backgroundColor: "#e3924e",
    justifyContent: "center",
  },
  
  orangeButton: {
    backgroundColor: "#e3924e",
  },
  
  greyButton: {
    backgroundColor: "#f5f1f0",
  },

  darkTanButton: {
    backgroundColor: "#973618",
  },
  blueButton: {
    backgroundColor: "#116f67",
  },
  mintButton: {
    backgroundColor: "#19A79C",
    height: 115,

  },
  button2: {
    width: "100%",
    height: 120,
    backgroundColor: "#dd7622",
    justifyContent: "center",
  },

  mainButton:{
    flex: 0.7, height: undefined, width: undefined, resizeMode: 'contain',
  },

  container1: {
    flex: 1,
    flexGrow:2,
    backgroundColor: "#52a6cb",
    // alignItems: "flex-start",
    flexDirection: "column",
    // flexWrap: "wrap",
    // justifyContent: "flex-end",
  },

  scrollView1: {
        marginHorizontal: 0,
   
  },

  image1: {
    flex: 1, height: undefined, width: undefined, resizeMode: 'contain',
  },
  widebutton2: {
    minHeight: 200,
  },
  blueButton2: {
    backgroundColor: "#52a6cb",
  },

});

export default HomeScreen;
