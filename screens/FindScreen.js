import React, { Component } from "react";

import { Stylesheet, Text, View } from "react-native";
import WideBox from "../styled-components/WideBox";
import { Icon, FooterTab, Footer, Button } from "native-base";

// const FindScreen = () => {
//   return (
//     <>
//       <WideBox>
//         <Text>Find Screen - you found it!</Text>
//       </WideBox>
//     </>
//   );
// };

class FindScreen extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Text>List of Dogs down here</Text>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => this.props.navigation.navigate("SearchTab")}
          >
            <Icon name="dog" />
            <Text>Search</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
export default FindScreen;
