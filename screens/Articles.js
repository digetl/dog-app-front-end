import React, { useState } from "react";

import WideBox from "../styled-components/WideBox";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import SingleArticle from "../articles/SingleArticle";

const DATA = [
  {
    id: "001",
    title: "What is Average Dog Weight?",
    para1: "An estimated 56 percent of dogs in the U.K. are overweight or obese.* How do you identify a healthy weight goal for your dog if he’s overweight (or underweight)?",
    para2: `Most people turn to resources on the internet with an average \n dog weight or a range. Because all dogs are different, though, it’s not that simple.j`,
    para3: "Problems with Identifying an “Average” Dog Weight Since dogs come in so many different breeds and sizes, it’s impossible to identify an average weight for all dogs. Weight may also depend on the dog’s sex and whether they’ve been spayed or neutered.",
  },
  {
    id: "002",
    title: "How to Cut Puppy Nails",
    para1: "Don’t forget about your puppy’s toenails. If they’re left untrimmed, they can make things uncomfortable for you and your family.",
    para2: "Trimming your puppy’s nails takes some care. Your veterinarian can give you a good idea of when and how to cut them. You may even just want to let your veterinarian or groomer do the job.",
    para3: "But, if you decide to do it yourself, here are some tips to get you started.",
  },
  {
    id: "003",
    title: "Canine Cognitive Dysfunction Syndrome - CDS in Dogs",
  },
  {
    id: "004",
    title: "Recognizing the Dangers of Overheating In Your Dog",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const Articles = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}

        style={{ backgroundColor }}
      />
    );
  };

  return (

    
    <SafeAreaView style={styles.container}>

      <WideBox>
        <Text>Articles page</Text>
      </WideBox>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <SingleArticle article={DATA.find((item) => item.id === selectedId)}></SingleArticle>

    </SafeAreaView>

   
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
  },
});


export default Articles;