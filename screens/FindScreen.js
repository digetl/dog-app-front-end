import React from "react";

import WideBox from "../styled-components/WideBox";
import Source from "../tempfiles/Source";
import {Text} from "react-native";

const FindScreen = () => {
  return (
    <>
      <WideBox>
          <Text>Find Screen - you found it!</Text>
      </WideBox>

      <Source></Source>
    </>
  );
};

export default FindScreen;
