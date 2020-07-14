import React from "react";

import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to LogIn"
      onPress={() => navigation.navigate("LoginScreen")}
    />
  );
};

export default HomeScreen;
