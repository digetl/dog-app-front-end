import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";

  const SingleService = (props) => {
    if (props.service) {
    return ( 
        <View style={styles.serviceText}>
            <Text style={styles.serviceTitle}>{props.service.name}</Text>
            <Text style={styles.textData}>{props.service.address}</Text>
            <Text style={styles.textData}>{props.service.phone_number}</Text>
        </View>
      );
    }
    else return null;
  }

  const styles = StyleSheet.create({

    serviceText: {
        paddingTop: 20,
        paddingLeft:20,
    },

    serviceTitle: {
      paddingLeft:0,
      color: "#383732",
      paddingBottom:10,
      fontWeight: "bold",
      fontSize:18,
    },
    textData: {
      fontSize:16,
      paddingBottom:5,
    }

  });

  export default SingleService;