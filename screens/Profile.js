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
  Image,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { ServerStyleSheet } from "styled-components";

const Profile = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
    
          <Text style={styles.buttonText}>Jayne MacDonald </Text>
          <View style={styles.imagesBlock}>
            <Image
                style={styles.image}
                source={require("../assets/ProfilePic.png")}
              >
            </Image>
          </View>

          <Text style={styles.buttonText}>My favourite best friends..</Text>
          <Text style={styles.buttonText}>Looking for... Border Terrier</Text>
          <Text style={styles.buttonText}>Home town... Dundee</Text>
          
          
        </SafeAreaView>
      </ScrollView>
      <View style={styles.bottomButtons}>
          <Text style={styles.edit}>Edit Profile</Text>
          <Text style={styles.logOut}>Log out</Text>
          <Text style={styles.settings}>Settings</Text>
      </View>
      <Footer></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    alignContent: "center",

  },

  title: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8,
  },

  image: {
    flex:1,
    padding: 10,
    justifyContent: 'center',
  },

  buttonRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },

  imagesBlock: {
    flex:1,
    alignItems: 'center',
    backgroundColor: "#fff",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    backgroundColor: "#D07A38",
    color: "white",
    paddingVertical: 15,
  },

  edit: {
    flex:1,
    backgroundColor: "#326D67",
    color: "#fff",
    textAlign: "center",
    lineHeight:50,
  },

  logOut: {
    flex:1,
    backgroundColor: "#383732",
    color: "#fff",
    textAlign: "center",
    lineHeight:50,
  },

  settings: {
    flex:1,
    backgroundColor: "#D07A38",
    color: "#fff",
    textAlign: "center",
    lineHeight:50,
  },

  bottomButtons: {
    flexDirection: 'row', width:'100%',
    flex: 1,
    alignItems:"flex-end",
    },

});

export default Profile;
