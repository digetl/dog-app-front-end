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
            <Text>{props.article.title}</Text>
            <Text>{props.article.text}</Text>
            <Text>{props.article.para1}</Text>
            <Text>{props.article.para2}</Text>
            <Text>{props.article.para3}</Text>
        </View>
      );
    }
    else return null;
  }

  const styles = StyleSheet.create({

    articleText: {
          justifyContent: "space-around",
    }

  })

  export default SingleArticle;
