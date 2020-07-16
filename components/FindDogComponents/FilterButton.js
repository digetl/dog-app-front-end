import React from "react";
import {StyleSheet, Button, TouchableOpacity, Text} from "react-native"

const FilterButton = ({filter, onPress}) => {

    return(
        <TouchableOpacity 
        onPress={onPress}
        filter={filter}
        // onPress={this.setFilter("filter")}
        style={styles.filterButton}
        >
          <Text style={styles.filterText}>{filter}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    filterButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: 280,
        backgroundColor: "#19A79C",
        borderRadius: 10,
        margin: 10,
    },

    filterText: {
        fontSize: 20
    }
})

export default FilterButton;




