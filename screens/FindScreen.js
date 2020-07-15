import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from "react-native"
import apiServices from "../apiService/dogService"

import { useSelector, useDispatch} from "react-redux"

import WideBox from "../styled-components/WideBox";
import Source from "../tempfiles/Source";
import FilterButton from "../components/FindDogComponents/FilterButton";



class FindScreen extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      selectedFilter: null,
      selectedSize: null,
      dogs: null
    }
  }

  filterButtons = () => {
    if(this.state.selectedFilter) {return null}
    return (
      <View style={styles.filterContainer}>
        <FilterButton filter="Breed" onPress={() => this.setState({selectedFilter: "Breed"})}></FilterButton>
        <FilterButton filter="Size" onPress={() => this.setState({selectedFilter: "Size"})}></FilterButton>
        <FilterButton filter="Group" onPress={() => this.setState({selectedFilter: "Group"})}></FilterButton>
      </View>
    )
  };

  sizeButtons = () => {
    if (this.state.selectedSize ) {return null}
    if (this.state.selectedFilter === "Size") {
      return (
      <View style={styles.filterContainer}>
        <FilterButton filter="Small" onPress={() => this.setState({selectedSize: "Small"})}></FilterButton>
        <FilterButton filter="Medium" onPress={() => this.setState({selectedSize: "Medium"})}></FilterButton>
        <FilterButton filter="Large" onPress={() => this.setState({selectedSize: "Large"})}></FilterButton>
      </View>
    )}
  }

  dogsList = () => {
    if(this.selectedFilter === "Breed") {
      return (<View style={styles.container}>
        <FlatList
          data= {this.state.dogs}
          renderItem= {item=> this.renderDog(item)}
          keyExtractor= {item=>item.id.toString()}
        />
        <Text>Hi</Text>
        </View>
        )
    }
    
    if (this.state.selectedSize){
      return (<View style={styles.container}>
      <FlatList
        data= {this.filteredDogsSize()}
        renderItem= {item=> this.renderDog(item)}
        keyExtractor= {item=>item.id.toString()}
      />
      <Text>Hi</Text>
      </View>
      )
    }
  }

  renderDog=(data)=> {
    return(
        <TouchableOpacity style={styles.list}>
            <Text >{data.item.breed}</Text>
            <Text >{data.item.group.replace(' group', '')}</Text>
        </TouchableOpacity>
    )}

  filteredDogsSize = () => {
    const filteredDogs = this.state.dogs.filter(dog => dog.size === this.state.selectedSize)
    return filteredDogs
  }
  
  componentDidMount(){
    apiServices.getDogs()
     .then(dogs => this.setState({dogs: dogs}))
  }

  render(){
    return (
      <> 
        {/* A NEW VIEW NEEDS TO GO IN HERE */}
        <View style={styles.container}>
          <Text>{this.state.selectedFilter}</Text>
          {this.filterButtons()}
          {this.sizeButtons()}
          {this.dogsList()}
        </View>
      </>
    )
  }
};

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
