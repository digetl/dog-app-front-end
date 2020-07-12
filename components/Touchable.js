import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WideBox from "../styled-components/WideBox";
 

const Touchable = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      
      
            <TouchableOpacity
                style={styles.button1}
                onPress={onPress}
            >
                <Text style={styles.pressMe}>Press Here
                </Text>
            </TouchableOpacity>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 0,
   
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },

  button1: {
    width: "100%",
    height: 100,
    backgroundColor: "#e3924e",
    justifyContent: "center",
    alignItems: "center",
  },

//   pressMe: {
//     backgroundColor: "#555",
//     height:100,
//   },

  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default Touchable;