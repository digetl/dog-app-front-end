import React from "react";

import { Button } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Find screen"
      onPress={() => navigation.navigate("FindScreen")}
    />
  );
};

export default HomeScreen;
