import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

const Footer = () => {

    const paw = {
        uri:
          "https://imageog.flaticon.com/icons/png/512/12/12638.png",
      };

    return (

        <View style={styles.footer}>
            <View>
                <ImageBackground
                source={paw}
                style={styles.paw}
            ></ImageBackground>
        </View>
          
          
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 0,
    },
    footer: {
        backgroundColor: '#52a6cb',
        height: 50,
        width: '100%',
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    paw: {
        flex: 1,
        width: 50,
        height: 50,

    },
});

export default Footer;
