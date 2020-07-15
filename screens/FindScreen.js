import React from "react";
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from "react-native"
import apiServices from "../apiService/dogService"

import { useSelector, useDispatch} from "react-redux"

import WideBox from "../styled-components/WideBox";
import Source from "../tempfiles/Source";
import FilterButton from "../components/FindDogComponents/FilterButton";
import TopicFilters from "../components/FindDogComponents/TopicFilters"
import SizeFilters from "../components/FindDogComponents/SizeFilters"
import {selectBreed, selectSize, selectGroup} from "../actions/filterDogsSelectorActions"

// class FindScreen extends React.Component {
const FindScreen = () => {


  // const dogs = apiServices.getDogs()
  // .then(dogs => this.setState({dogs: dogs}))
  
  useSelector(state => console.log(state))
  const filter = useSelector(state => state.filters)
  const size = useSelector(state => state.size)
  const dispatch = useDispatch()



  // dogsList = () => {
  //   if(this.selectedFilter === "Breed") {
  //     return (<View style={styles.container}>
  //       <FlatList
  //         data= {this.state.dogs}
  //         renderItem= {item=> this.renderDog(item)}
  //         keyExtractor= {item=>item.id.toString()}
  //       />
  //       <Text>Hi</Text>
  //       </View>
  //       )
  //   }
    
  //   if (this.state.selectedSize){
  //     return (<View style={styles.container}>
  //     <FlatList
  //       data= {this.filteredDogsSize()}
  //       renderItem= {item=> this.renderDog(item)}
  //       keyExtractor= {item=>item.id.toString()}
  //     />
  //     <Text>Hi</Text>
  //     </View>
  //     )
  //   }
  // }

  // renderDog=(data)=> {
  //   return(
  //       <TouchableOpacity style={styles.list}>
  //           <Text >{data.item.breed}</Text>
  //           <Text >{data.item.group.replace(' group', '')}</Text>
  //       </TouchableOpacity>
  //   )}

  // filteredDogsSize = () => {
  //   // const filteredDogs = this.state.dogs.filter(dog => dog.size === this.state.selectedSize)
  //   return dogs
  // }
  
  


  return (
    <> 
      {/* A NEW VIEW NEEDS TO GO IN HERE */}
      <View style={styles.container}>
        {!filter ? <TopicFilters></TopicFilters> : null}
        {/* <TopicFilters></TopicFilters> */}
        <SizeFilters></SizeFilters>
        {/* {filterButtons()} */}
        {/* {sizeButtons()}
        {dogsList()} */}
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  
  filterContainer: {
      flex: 0.5,
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
  },
})

export default FindScreen;
