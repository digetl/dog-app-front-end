import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import FindScreen from "./screens/FindScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="FindScreen" component={FindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
