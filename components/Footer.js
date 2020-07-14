import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Footer = (props) => {
  const image = {
    uri: "https://imageog.flaticon.com/icons/png/512/12/12638.png",
  };

//   const onPressHomeScreen = () => navigation.navigate("HomeScreen");

  return (
    <>
      <View style={styles.footer}>
        <TouchableOpacity>
          <ImageBackground source={image} style={styles.paw}></ImageBackground>
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
    height: 60,
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
});

export default Footer;
