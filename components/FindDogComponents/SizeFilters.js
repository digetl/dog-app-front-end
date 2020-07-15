import React from "react";
import {View} from "react-native"
import FilterButton from "./FilterButton"

import { useSelector, useDispatch} from "react-redux"
import {selectSmall, selectMedium, selectLarge} from "../../actions/filterSizesSelectorActions"

const TopicFilters = () => {

    const dispatch = useDispatch()

    return (
      <View>
        <FilterButton filter="Small" onPress={() => dispatch(selectSmall())}></FilterButton>
        <FilterButton filter="Medium" onPress={() => dispatch(selectMedium())}></FilterButton>
        <FilterButton filter="Large" onPress={() => dispatch(selectLarge())}></FilterButton>
      </View>
    )
}

export default TopicFilters;