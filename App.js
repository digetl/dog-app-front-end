import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import FindScreen from "./screens/FindScreen";
import Articles from "./screens/Articles";
import Breeder from "./screens/Breeder";
import LocalServices from "./screens/LocalServices";
import LoginScreen from "./screens/LoginScreen";
import Manage from "./screens/Manage";
import Profile from "./screens/Profile";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FindScreen" component={FindScreen} />
        <Stack.Screen name="Articles" component={Articles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
