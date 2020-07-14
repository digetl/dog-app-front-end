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
import { View, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  }
}
