import React, { useState } from "react";

import WideBox from "../styled-components/WideBox";

import Footer from ".././components/Footer";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";

import SingleService from "../localServices/SingleService";
import { ScrollView } from "react-native-gesture-handler";


const DATA = [
  {
    id: "001",
    name: "Noahs Ark Pet Shop",
    address: "38-40 Granton Road, Edinburgh, EH5 3QS",
    phone_number: "0131 551 2570"
    
  },
  {
    id: "002",
    name: "Hill Lord and Co",
    address: "735 Bruntsfield Place, Edinburgh, EH10 4HJ",
    phone_number: "0131 229 6655"
  },
  {
    id: "003",
    name: "Dofos Pet Centre and Dog Grooming",
    address: "337 Leith Walk Edinburgh, EH6 8SD",
    phone_number: "0131 557 4666"
  },
  {
    id: "004",
    name: "Top Dogz",
    address: "353 Leith Walk, Leith, Edinburgh, EH6 8SD",
    phone_number: "0131 553 4409"
  },
  {
    id: "005",
    name: "Doggone Purrfect",
    address: "268 Leith Walk, Edinburgh, EH6 5EL",
    phone_number: "0131 561 1438"
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.buttonRow, style]}>
    <Text style={styles.buttonText}>{item.name}</Text>
  </TouchableOpacity>
);

const PetShopServices = () => {
  
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#d07a38" : "#d8955a";

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
      <ScrollView style={styles.petService}>
      <SafeAreaView style={styles.container}>
  
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

  buttonRow: {
    flex:1,
    flexDirection: "row",  
    justifyContent: 'center',
    marginBottom:5,
    marginTop:10,
  },
  buttonText: {
    fontSize:18,
    fontWeight: "bold",
    color: "#fff",
    paddingTop:10,
    paddingBottom:10,
    textAlign: "center",
  },
  greenrow: {
    backgroundColor: "#326d67"},

  mintrow: {
    backgroundColor: "#4da49c"},
  
  tanrow: {
    backgroundColor: "#d8955a"},

  darktanrow: {
    backgroundColor: "#d07a38"},

    petService: {
      backgroundColor: "#66a5c7",
      }
});


export default PetShopServices;