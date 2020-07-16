import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native"
import { selectDog } from "../../actions/selectDogAction"

import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native";


const DogList = ({dogs}) => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

    const group = useSelector(state => state.groups)
    const size = useSelector(state => state.sizes)

    renderDogs=(data)=> {
        return(
          <TouchableOpacity 
            onPress={() => {
              dispatch(selectDog(data.item))
              navigation.navigate("ListingScreen")
            }}
            style={styles.dogItem}
            >
            <Text style={styles.dogBreedText}>{data.item.breed}</Text>
            {group ? <Text style={styles.dogItemText}>{data.item.size}</Text> : null}
            {size ?  <Text style={styles.dogItemText}>{data.item.group.replace("Group", '')}</Text> : null}
           
          </TouchableOpacity>
        )}

    return (

        <FlatList
          data= {dogs}
          renderItem= {item=> this.renderDogs(item)}
          keyExtractor= {item=>item.id.toString()}
        />
      )
}

export default DogList;

const styles = StyleSheet.create({
    dogItem: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 40,
        width: 320,
        backgroundColor: "#19A79C",
        borderRadius: 10,
        margin: 5,
    },

    dogBreedText: {
        textAlign: "center",  
        width: 150,
        fontSize: 18,
    },

    dogItemText: {
        textAlign: "center",  
        width: 40,
        fontSize: 18,
    }
})