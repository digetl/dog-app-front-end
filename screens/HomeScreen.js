// import React, { Component } from "react";

// import { Button } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to LogIn"
//       onPress={() => navigation.navigate("LoginScreen")}
//     />
//   );
// };

// export default HomeScreen;

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>NEXT BEST FRIEND</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>@who let the dogs out</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#c14a30",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontWeight: "200",
  },
  titleWrapper: {
    justifyContent: "center",
    flex: 1,
  },
});
