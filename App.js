import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WideBox from "./styled-components/WideBox";
import BodyText from "./styled-components/BodyText";
import GridTestComponent from "./components/GridTestComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <GridTestComponent></GridTestComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
