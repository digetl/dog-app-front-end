import React, { useState } from "react";

import WideBox from "../styled-components/WideBox";

import Footer from ".././components/Footer";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";

import SingleService from "../localServices/SingleService";
import { ScrollView } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "001",
    service_type: "Dog Walker",
    name: "The Dashing White Rabbit Company",
    address: "3 Sinclair Place, Edinburgh, EH11 1AG",
    phone_number: "0131 478 5098"
    
  },
  {
    id: "002",
    service_type: "Dog Walker",
    name: "Healthy Hounds",
    address: "7/3 New Orchardfield, Edinburgh, EH6 5ES",
    phone_number: "07837 774478"
  },
  {
    id: "003",
    service_type: "Dog Walker",
    name: "P and J Pet Care",
    address: "Gilmour Street, Edinburgh, EH8 9HR",
    phone_number: "07999 482440"
  },
  {
    id: "004",
    service_type: "Dog Walker",
    name: "Dog Walking Edinburgh",
    address: "14/7 Murano Place, Edinburgh, EH7 5HG",
    phone_number: "07814 447450"
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

const DogWalkingService = () => {
  // const navigation = useNavigation();
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
          <Text>Local Services</Text>
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
});


export default DogWalkingService;