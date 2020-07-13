import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {


  return (
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
     </Stack.Navigator>
   </NavigationContainer>

  );
}

export default App;