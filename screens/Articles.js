import React, { useState } from "react";
import Footer from ".././components/Footer";

import WideBox from "../styled-components/WideBox";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import SingleArticle from "../articles/SingleArticle";
import { ScrollView } from "react-native-gesture-handler";

const DATA = [
  {
    id: "001",
    title: "What is Average Dog Weight?",
    text: "An estimated 56 percent of dogs in the U.K. are overweight or obese.* How do you identify a healthy weight goal for your dog if he’s overweight (or underweight)? \n\nMost people turn to resources on the internet with an average dog weight or a range. Because all dogs are different, though, it’s not that simple. \r\rProblems with Identifying an “Average” Dog Weight\n\nSince dogs come in so many different breeds and sizes, it’s impossible to identify an average weight for all dogs. Weight may also depend on the dog’s sex and whether they’ve been spayed or neutered.",
    
  },
  {
    id: "002",
    title: "How to Cut Puppy Nails",
    text: "Don’t forget about your puppy’s toenails. If they’re left untrimmed, they can make things uncomfortable for you and your family. \n\nTrimming your puppy’s nails takes some care. Your veterinarian can give you a good idea of when and how to cut them. You may even just want to let your veterinarian or groomer do the job. \n\nBut, if you decide to do it yourself, here are some tips to get you started.",
  },
  {
    id: "003",
    title: "Canine Cognitive Dysfunction Syndrome - CDS in Dogs",
    text: "Canine cognitive disorder, also known as cognitive dysfunction, is a decline in the brain’s ability to function. Research suggest that signs of CDS occur in 23 percent of dogs 12 to 14 years old and in 41 percent of dogs older than 14 years. \n\nUnderstanding CDS \n\nAffected dogs develop amyloid plaques, a sticky buildup that accumulates on neurons in the front part of the brain, or frontal lobe. Among other things, the frontal lobe controls memory, learning, focus and sensory information. The plaques eventually spread to other areas of the brain, causing disorientation and lack of spatial awareness. Vision and hearing may also be affected.",
  },
  {
    id: "004",
    title: "Recognizing the Dangers of Overheating In Your Dog",
    text: "The potential for a dog to overheat can result in decreased performance as well as serious health conditions. A dog does not regulate his body temperature by sweating. Most adult dogs are good at controlling their body temperatures, except when they are put in stressful situations. \n\nIt is important to be aware of the signs of overheating, so you can take steps to avoid problems. “While a slight case of overheating will cause discomfort, the situation can advance to serious health problems if not attended to immediately,” says Purina Director of Sporting Dog Programs Bob West. “As a dog’s body temperature rises, the dog compensates by panting. Panting draws cooler air to the back of the throat and across the tongue, which cools the blood circulating to the core of the dog.” \n\nHigh humidity adds to the risk of overheating because it reduces the effect of panting since the saliva evaporates less quickly. While panting is an effective short-term solution, it is an inefficient method of lowering body temperature in the long run because the panting itself uses energy and that generates additional heat.",
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
  },
});


export default Articles;