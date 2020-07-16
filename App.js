import "react-native-gesture-handler";
import React from "react";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './RootReducer';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import FindScreen from "./screens/FindScreen";
import ListingScreen from "./screens/ListingScreen";
import Articles from "./screens/Articles";
import Breeder from "./screens/Breeder";
import LocalServices from "./screens/LocalServices";
import LoginScreen from "./screens/LoginScreen";
import Manage from "./screens/Manage";
import Profile from "./screens/Profile";
import Footer from "./components/Footer";
import DogWalkingService from "./screens/DogWalkingService";

console.disableYellowBox = true;

const Stack = createStackNavigator();

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FindScreen" component={FindScreen} />
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LocalServices" component={LocalServices} />
        <Stack.Screen name="DogWalkingService" component={DogWalkingService}/>
        <Stack.Screen name="Footer" component={Footer} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

export default App;
