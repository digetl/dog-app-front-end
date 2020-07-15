import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Footer = (props) => {
  

  const navigation = useNavigation();

//   const onPressHomeScreen = () => navigation.navigate("HomeScreen");

  return (
    <>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image style={styles.footerButton} source={require('../assets/doghouse_w2.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  footer: {
    backgroundColor: "#52a6cb",
    height: 70,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  paw: {
    flex: 1,
    width: 50,
    height: 50,
  },

  footerButton:{
    flex: 1, height: 100, width: 50, resizeMode: 'contain',
  },

});

export default Footer;
