import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet} from "react-native"
import dogServices from "../apiService/dogService"
import Footer from ".././components/Footer";

import { useSelector, useDispatch} from "react-redux"

import WideBox from "../styled-components/WideBox";
import Source from "../tempfiles/Source";
import TopicFilters from "../components/FindDogComponents/TopicFilters"
import SizeFilters from "../components/FindDogComponents/SizeFilters"
import GroupFilters from "../components/FindDogComponents/GroupFilters"
import DogList from "../components/FindDogComponents/DogList"
import { useSafeArea } from "react-native-safe-area-context";
// import {selectBreed, selectSize, selectGroup} from "../actions/filterDogsSelectorActions"

const FindScreen = ({navagation}) => {

  const [dogs, setDogs] = useState({});

  const filter = useSelector(state => state.filters)
  const size = useSelector(state => state.sizes)
  const group = useSelector(state => state.groups)
  const dispatch = useDispatch()

  useEffect(() => {
    dogServices.getDogs()
    .then(res => setDogs(res))
    .catch(err => console.log(err))
  }, [])

  const filteredDogList = () => {
    if(!dogs) {return null}
    switch(filter) {
      case "Breed": 
       return <DogList navagation={navagation} dogs={dogs}></DogList>;
      case "Size":
        const sizeFilteredDogs = dogs.filter(dog => dog.size === size);
        return <DogList dogs={sizeFilteredDogs}></DogList>
      case "Group": 
        const groupFilteredDogs = dogs.filter(dog => dog.group === group);
        return <DogList dogs={groupFilteredDogs}></DogList>
      default:
        return null;
    }
  }

  useSelector(state => console.log(state))
  
  return (
    <> 
      {/* A NEW VIEW NEEDS TO GO IN HERE */}
      <View style={styles.container}>
        <Text style={styles.filterHeading}>Filter your search to find your most suitable perfect pal</Text>
        {!filter && (!size || !group) ? <TopicFilters></TopicFilters> : null}
        {!size && filter === "Size" ? <SizeFilters></SizeFilters> : null}
        {!group && filter === "Group" ? <GroupFilters></GroupFilters> : null}
        {filter && (size || group) || filter === "Breed" ? filteredDogList() : null}
      </View>
      <Footer />
    </>
  )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff"
  },
  filterHeading: {
    textAlign: "center",
    fontSize: 20,
    width: 300
  }
})

export default FindScreen;
