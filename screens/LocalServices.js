import React from "react";

import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";

import Footer from ".././components/Footer";
import DogWalkingService from "./DogWalkingService"

const LocalServices = ({navigation}) => {

    // const navigation = useNavigation();
  
    return (
      <>
        
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate("DogWalkingService")}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Dog Walking Service</Text>
                    </View>
            </TouchableOpacity>
        </ScrollView>
  
        <Footer></Footer>
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
      flexWrap: "wrap",
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
      backgroundColor: "#a4c1db",
      alignItems: "center",
      margin: 0,
      width: "50%",
    },
    buttonText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
    button1: {
      width: "100%",
      height: 100,
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
      backgroundColor: "#52a6cb",
    },
    mintButton: {
      backgroundColor: "#19A79C",
    },
    button2: {
      width: "100%",
      height: 100,
      backgroundColor: "#a4c1db",
      justifyContent: "center",
    },
  });
  

export default LocalServices;
