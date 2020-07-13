import React, { Component } from "react";

import WideBox from "../styled-components/WideBox";
import Source from "../tempfiles/Source";
import { Text } from "react-native";

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

// class FindScreen extends Component {
//   render() {
//     return (
//       <Footer>
//         <FooterTab>
//           <Text>List of Dogs down here</Text>
//           <Button
//             vertical
//             active={props.navigationState.index === 0}
//             onPress={() => this.props.navigation.navigate("SearchTab")}
//           >
//             <Icon name="dog" />
//             <Text>Search</Text>
//           </Button>
//         </FooterTab>
//       </Footer>
//     );
//   }
// }
export default FindScreen;
