import React, from "react";
import Footer from ".././components/Footer";

import { FlatList, SafeAreaView, StatusBar, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

const Profile = () => {
  return (
    <>
      <ScrollView>
        <WideBox>
            <Text style={styles.title}>Profile Page </Text>
        </WideBox>
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