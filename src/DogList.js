import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { addDog, getDogs } from "./api/DogsApi";
import { ListItem, Divider } from "react-native-firebase";

class DogList extends Component {
  sizes = ["Medium", "Small", "Large"];

  state = {
    dogList: [],
    currentDogItem: null,
  };

  onDogAdded = (dog) => {
    console.log("Dog Added");
    console.log(dog);
  };

  onDogsReceived = (dogList) => {
    console.log(dogList);
    this.setState((prevState) => ({
      dogList: (prevState.dogList = dogList),
    }));
  };

  componentDidMount() {
    getDogs(this.onDogsReceived);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={StyleSheet.row}>
          <TextInput
            style={StyleSheet.input}
            placeholder="Add Dog"
            value={this.state.currentDogItem}
            onChangeText={(text) =>
              this.setState((prevState) => ({
                currentDogItem: (prevState.currentDogItem = text),
              }))
            }
          />
          <Button title="Submit" style={StyleSheet.button} onPress={() => 
         addDog({
             breed: this.state.currentDogItem, 
             size: this.sizes[Math.floor(Math.random() * this.sizes.length)]
         },
         this.onDogAdded
         )} />
        </View>
        <FlatList
        data={this.state.foodList}
        ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
            console.log(item);
            return (
                <ListItem
                title={item.breed}
                subtitle={item.size}
                onPress={() => {}}
                />
            );
        }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16
    },
    button: {
        width: 100,
        height: 50 
    }
})
