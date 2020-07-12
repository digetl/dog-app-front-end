import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WideBox from "./styled-components/WideBox";
import BodyText from "./styled-components/BodyText";
import GridTestComponent from "./components/GridTestComponent";
import {ButtonComponent} from "./components/ButtonComponent";

const App = () => {
  return (
    <View style={styles.container}>
      <>
      <GridTestComponent></GridTestComponent>
      {/* <ButtonComponent></ButtonComponent> */}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;