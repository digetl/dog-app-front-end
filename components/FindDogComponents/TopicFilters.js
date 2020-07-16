import React from "react";
import {View, StyleSheet} from "react-native"
import FilterButton from "./FilterButton"

import { useSelector, useDispatch} from "react-redux"
import {selectBreed, selectSize, selectGroup} from "../../actions/filterDogsSelectorActions"

const TopicFilters = () => {

    const dispatch = useDispatch()

    return (
        <View style={styles.topicsContainer}>
          <FilterButton filter="Search By Breed" onPress={() => dispatch(selectBreed())}></FilterButton>
          <FilterButton filter="Search By Size" onPress={() => dispatch(selectSize())}></FilterButton>
          <FilterButton filter="Search By Group" onPress={() => dispatch(selectGroup())}></FilterButton>
        </View>
      )
}

export default TopicFilters;

const styles = StyleSheet.create({

  topicsContainer: {
    flex: 0.7,
    justifyContent: "space-around",
  },
  topicButtons: {
    fontSize:18,
  }


})