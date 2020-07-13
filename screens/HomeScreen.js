import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import WideBox from "../styled-components/WideBox";
import Logo from "../styled-components/Logo";
import WideButton from "../styled-components/WideButton";
import { Button } from "react-native";

const image = {
  uri:
    "https://image.shutterstock.com/image-vector/dogs-banner-260nw-441292900.jpg",
};

const HomeScreen = ({ navigation }) => {
  
  const onPress=() => navigation.navigate("FindScreen");

  return (
    <>
      <WideBox>
        <Logo>
          <WideButton>
            <Text style={styles.buttonText}>@ NextBestFriend</Text>
          </WideButton>
        </Logo>
      </WideBox>

      <WideBox>
        <WideButton>
          <ImageBackground
            source={image}
            style={styles.image}
          ></ImageBackground>
        </WideButton>
      </WideBox>

      <TouchableOpacity style={styles.button1} onPress={onPress}>
        <WideBox>
          <View style={styles.wideButton}>
            <Text style={styles.buttonText}>Find your next best friend</Text>
          </View>
        </WideBox>
      </TouchableOpacity>
    </>

    // <Button
    //   title="Go to Find screen"
    //   onPress={() => navigation.navigate("FindScreen")}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
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

  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default HomeScreen;
