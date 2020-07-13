import React from "react";

import { Text, View } from "react-native";
import WideBox from "../styled-components/WideBox";

const FindScreen = () => {
  return (
    <>
      <WideBox>
        <View style={styles.logo}>
          <View style={styles.wideButton}>
            <Text style={styles.buttonText}>Find Screen - you found it!</Text>
          </View>
        </View>
      </WideBox>
    </>
  );
};

export default FindScreen;
