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
          <View style={styles.button1}>
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
    marginVertical: 10, 
    alignItems: 'center',
    margin: 10,

  },
  button1: {
    minWidth: 150,
    height: 100,
    backgroundColor: 'green',
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
