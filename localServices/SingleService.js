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
            <Text style={styles.serviceTitle}>{props.service.serviceType}</Text>
            <Text>{props.service.name}</Text>
            <Text>{props.service.address}</Text>
            <Text>{props.service.phone_number}</Text>
        </View>
      );
    }
    else return null;
  }

  const styles = StyleSheet.create({

    serviceText: {
        paddingTop: 20,
    },

    serviceTitle: {
      color: "#52a6cb",
      paddingBottom:10,
      fontWeight: "bold",
      fontSize:18,
      textAlign: "center",
    }

  });

  export default SingleService;