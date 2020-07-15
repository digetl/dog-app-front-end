import React from "react";
import {
StyleSheet,
View,
Image,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity
} from "react-native";
import FilterButton from "../components/FindDogComponents/FilterButton"

export default class Source extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: {backgroundColor: "#fff"},
      headerTitleStyle: {textAlign: "center",flex: 1}
    };
  };

  constructor(props) {
  super(props);
  this.state = {
    loading: true,
    dataSource:[],
    filter: ""
    };
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8080/dogs")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
      loading: false,
      dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }


  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
      }}
      />
    );
  }

  // FilterButtons = () => {
  //   return (
  //     <View style={styles.filterContainer}>
  //       <TouchableOpacity 
  //       onPress={this.setFilter("filter")}
  //       style={styles.filterButton}>
  //         <Text style={styles.filterText}>Find By Breed</Text>
  //       </TouchableOpacity>

  //       <TouchableOpacity 
  //       onPress={this.setFilter("size")}
  //       style={styles.filterButton}>
  //         <Text style={styles.filterText}>Find By Size</Text>
  //       </TouchableOpacity>

  //       <TouchableOpacity 
  //       onPress={this.setFilter("group")}
  //       style={styles.filterButton}>
  //         <Text style={styles.filterText}>Find By Group</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }


  setFilter = (filter) => {
    console.log("hi");
      // if (filter === "breed") {this.setState({filter: "breed"})}
      // if (filter === "size") {this.setState({filter: "size"})}
      // if (filter === "group") {this.setState({filter: "group"})}
  }
  
  renderItem=(data)=> {
    return(
      <TouchableOpacity style={styles.list}>
          <Text style={styles.lightText}>{data.item.breed}</Text>
          <Text style={styles.lightText}>{data.item.size}</Text>
          <Text style={styles.lightText}>{data.item.group}</Text>
      </TouchableOpacity>
    )}

  render(){
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(

      <View style={styles.container}>
      
      <FilterButton filter="breed" onPress={this.setFilter()}
      ></FilterButton>

      {/* {this.filterButtons()} */}
        {/* <FlatList
          data= {this.state.dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem= {item=> this.renderItem(item)}
          keyExtractor= {item=>item.id.toString()}
        />  */}
      </View>
    )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  },
  lightText:{
    color:"#000"
  }
});