import React from "react";

import WideBox from "../styled-components/WideBox";
import {Text, StyleSheet, ScrollView} from "react-native";
import Footer from ".././components/Footer";

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