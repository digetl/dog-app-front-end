// import "react-native-gesture-handler";
// import React from "react";

// import { Asset } from "expo";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from "./screens/HomeScreen";
// import FindScreen from "./screens/FindScreen";

// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />

//         <Stack.Screen name="FindScreen" component={FindScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

export default class App extends Component {
  render() {
    return <LoginScreen />;
    // return <HomeScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19a79c",
  },
});
