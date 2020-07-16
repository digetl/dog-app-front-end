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
});

export default Profile;
