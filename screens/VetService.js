import React, { useState } from "react";

import WideBox from "../styled-components/WideBox";

import Footer from ".././components/Footer";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";

import SingleService from "../localServices/SingleService";
import { ScrollView } from "react-native-gesture-handler";


const DATA = [
  {
    id: "001",
    name: "Market Cross Veterinary Clinic Ltd",
    address: "Dalkeith, EH22",
    phone_number: "01312 022136"
    
  },
  {
    id: "002",
    name: "Dundas Veterinary Group",
    address: "99 Dundas Street, Edinburgh, EH3 6SD",
    phone_number: "0131 202 2719"
  },
  {
    id: "003",
    name: "Gordon Vets Ltd",
    address: "Musselburgh, EH21",
    phone_number: "0131 665 2124"
  },
  
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

const VetService = () => {
  
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#52a6cb" : "#a4c1db";

    return (
      
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}

        style={{ backgroundColor }}
      />
    );
  };

  return (
    <>
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <WideBox>
          <Text>Pet Shops</Text>
        </WideBox>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <SingleService service={DATA.find((item) => item.id === selectedId)}></SingleService>

      </SafeAreaView>
    </ScrollView>
    <Footer></Footer>
  </> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "space-around",
    margin: 15,
  },
  item: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  topTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonRow: {
    flex:1,
    flexDirection: "row",  
    justifyContent: 'center',
  },
  buttonText: {
    fontSize:24,
    fontWeight: "bold",
    color: "#fff",
    paddingTop:20,
    paddingBottom:20,
    textAlign: "center",
  },
  greenrow: {
    backgroundColor: "#326d67"},
});


export default VetService;