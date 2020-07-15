import React from "react";

import WideBox from "../styled-components/WideBox";
import {Text, StyleSheet, ScrollView} from "react-native";
import Footer from ".././components/Footer";

const LocalServices = () => {
  return (
    <>
      <ScrollView>
        <WideBox>
            <Text style={styles.title}>Local Services</Text>
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

export default LocalServices;