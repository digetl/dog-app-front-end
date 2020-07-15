import "react-native-gesture-handler";
import React from "react";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './RootReducer';

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

const store = createStore(rootReducer);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FindScreen" component={FindScreen} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LocalServices" component={LocalServices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
