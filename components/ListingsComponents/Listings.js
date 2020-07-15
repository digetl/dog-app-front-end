import React from "react";
import { FlatList, TouchableOpacity, Text } from "react-native"

// import { useDispatch } from "react-redux"
// import { useNavigation } from "@react-navigation/native";


const Listings = ({listings}) => {

    // const dispatch = useDispatch()
    // const navigation = useNavigation();

    renderListings=(data)=> {
        return(
          <TouchableOpacity 
            // onPress={() => {
            //   dispatch(selectDog(data.item))
            //   navigation.navigate("ListingScreen")}}
              >
            <Text >{data.item.name}</Text>
            <Text >Age: {data.item.age}</Text>
            <Text >{data.item.dog.breed}</Text>
            <Text >{data.item.group}</Text>
          </TouchableOpacity>
        )}

    return (

        <FlatList
          data= {listings}
        //   ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem= {item=> this.renderListings(item)}
          keyExtractor= {item=>item.id.toString()}
        />
      )
}

export default Listings;