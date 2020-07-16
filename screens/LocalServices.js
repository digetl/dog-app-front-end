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
  
    return (
      <>
        
        <View style={styles.localServices}>
            <TouchableOpacity style={styles.buttonRow, styles.greenrow} onPress={() => navigation.navigate("DogWalkingService")}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Dog Walkers</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRow, styles.darktanrow} onPress={() => navigation.navigate("PetShopServices")}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Pet Shops</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRow, styles.mintrow} onPress={() => navigation.navigate("VetService")}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Local Vets</Text>
                    </View>
            </TouchableOpacity>
        </View>
  
        <Footer></Footer>
      </>
    );
  };
  
  const styles = StyleSheet.create({
      
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

    localServices: {
      flex:1,
      justifyContent: "space-between",
      paddingTop: 120,
      paddingBottom: 120,
      backgroundColor: "#66a5c7",
      }
  });
  

export default LocalServices;
