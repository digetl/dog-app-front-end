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
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Profile;
