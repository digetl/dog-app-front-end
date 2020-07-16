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
        {/* <TouchableOpacity style={(styles.buttonRow, styles.greenrow)}> */}
        <TouchableOpacity behavior="padding" style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: "#66A5C7",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#D07A38",
    justifyContent: "center",
  },
  title: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.7,
  },
  // smallIconContainer: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  // },
  // button2: {
  //   width: "100%",
  //   height: 100,
  //   backgroundColor: "#a4c1db",
  //   justifyContent: "center",
  // },
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  // },
  // leftBox: {
  //   backgroundColor: "#e3924e",
  //   alignItems: "center",
  //   margin: 0,
  //   width: "50%",
  // },
  // rightBox: {
  //   backgroundColor: "#e3924e",
  //   alignItems: "center",
  //   margin: 0,
  //   width: "50%",
  // },
  // buttonText: {
  //   textAlign: "center",
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // button1: {
  //   width: "100%",
  //   height: 100,
  //   backgroundColor: "#e3924e",
  //   justifyContent: "center",
  // },
  // mintButton: {
  //   backgroundColor: "#19A79C",
  // },
  // buttonRow: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
  // buttonText: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#fff",
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   textAlign: "center",
  // },
  // greenrow: {
  //   backgroundColor: "#D8955A",
  // },

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
});

export default Profile;
