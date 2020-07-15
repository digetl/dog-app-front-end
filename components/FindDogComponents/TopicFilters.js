import React from "react";
import {View} from "react-native"
import FilterButton from "./FilterButton"

import { useSelector, useDispatch} from "react-redux"
import {selectBreed, selectSize, selectGroup} from "../../actions/filterDogsSelectorActions"

const TopicFilters = () => {

    // const filter = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        <View>
          <FilterButton filter="Breed" onPress={() => dispatch(selectBreed())}></FilterButton>
          <FilterButton filter="Size" onPress={() => dispatch(selectSize())}></FilterButton>
          <FilterButton filter="Group" onPress={() => dispatch(selectGroup())}></FilterButton>
        </View>
      )
}

export default TopicFilters;