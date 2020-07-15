import React from "react";
import {View, ScrollView} from "react-native"
import FilterButton from "./FilterButton"

import {useDispatch} from "react-redux"
import {
    selectGundog, 
    selectHound, 
    selectPastoral, 
    selectTerrier, 
    selectToy,
    selectUtility,
    selectWorking,
} from "../../actions/filterGroupsSelectorActions"
import { resetTopicFilter } from "../../actions/filterDogsSelectorActions";

const GroupFilters = () => {

    const dispatch = useDispatch()

    return (
      <ScrollView>
        <FilterButton filter="Gundog" onPress={() => dispatch(selectGundog())}></FilterButton>
        <FilterButton filter="Hound" onPress={() => dispatch(selectHound())}></FilterButton>
        <FilterButton filter="Pastoral" onPress={() => dispatch(selectPastoral())}></FilterButton>
        <FilterButton filter="Toy" onPress={() => dispatch(selectToy())}></FilterButton>
        <FilterButton filter="Terrier" onPress={() => dispatch(selectTerrier())}></FilterButton>
        <FilterButton filter="Utility" onPress={() => dispatch(selectUtility())}></FilterButton>
        <FilterButton filter="Working" onPress={() => dispatch(selectWorking())}></FilterButton>
      </ScrollView>
    )
}

export default GroupFilters;