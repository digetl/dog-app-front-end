import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";

  const SingleArticle = (props) => {
    if (props.article) {
    return ( 
        <View style={styles.articleText}>
            <Text style={styles.articleTitle}>{props.article.title}</Text>
            <Text>{props.article.text}</Text>
        </View>
      );
    }
    else return null;
  }

  const styles = StyleSheet.create({

    articleText: {
        paddingTop: 20,
    },

    articleTitle: {
      color: "#52a6cb",
      paddingBottom:10,
      fontWeight: "bold",
      fontSize:18,
      textAlign: "center",
    }

  });

  export default SingleArticle;