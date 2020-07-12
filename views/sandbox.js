



//////////////////////////////////////////////
//               VERSION 1                  //
//////////////////////////////////////////////

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>


        <View style={styles.wideBox}>
          <View style={styles.wideButton}>
            <Text style={styles.buttonText}>Find your next best friend</Text>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Articles</Text>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Profile</Text>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}></Text>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}></Text>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Box 1</Text>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Inbox</Text>
          </View>
        </View>


        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40,
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: '#699bc6', 
    alignItems: 'center',
    margin: 1,

  },
  button1: {
    minWidth: 150,
    height: 100,
    backgroundColor: '#e3924e',
    justifyContent: 'center',
  },
  button2: {
    minWidth: 150,
    height: 100,
    backgroundColor: '#973618',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
  wideBox: {
    width: '100%',
  },
  wideButton: {
    backgroundColor: '#699bc6',
    margin: 10,
    height: 100,
    justifyContent: 'center',
  }
 
});
