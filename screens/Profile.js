import React from "react";

import WideBox from "../styled-components/WideBox";
import {Text, StyleSheet} from "react-native";
import Footer from ".././components/Footer";

const Profile = () => {
  return (
    <>
      <WideBox>
          <Text style={styles.title}>Profile Page </Text>
          <Footer></Footer>
      </WideBox>
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