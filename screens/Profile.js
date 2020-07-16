import React from "react";
import Footer from ".././components/Footer";

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <TouchableOpacity style={(styles.buttonRow, styles.greenrow)}>
          <View>
            <Text style={styles.title}>Profile Page </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Footer></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  smallIconContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  leftBox: {
    backgroundColor: "#e3924e",
    alignItems: "center",
    margin: 0,
    width: "50%",
  },
  rightBox: {
    backgroundColor: "#e3924e",
    alignItems: "center",
    margin: 0,
    width: "50%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button1: {
    width: "100%",
    height: 100,
    backgroundColor: "#e3924e",
    justifyContent: "center",
  },

  // orangeButton: {
  //   backgroundColor: "#e3924e",
  // },

  // greyButton: {
  //   backgroundColor: "#f5f1f0",
  // },

  // darkTanButton: {
  //   backgroundColor: "#973618",
  // },
  // blueButton: {
  //   backgroundColor: "#52a6cb",
  // },
  mintButton: {
    backgroundColor: "#19A79C",
  },
  button2: {
    width: "100%",
    height: 100,
    backgroundColor: "#a4c1db",
    justifyContent: "center",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
  },
  greenrow: {
    backgroundColor: "#D8955A",
  },
});

export default Profile;
