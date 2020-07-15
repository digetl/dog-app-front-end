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
    filterButton: {
        flex: 1,
        justifyContent: "center",
        height: 50,
        width: 200,
        backgroundColor: "#8feb34",
        margin: 10
    },
    filterText: {
        textAlign:"center",
        alignItems: "center"
    },

})

export default FilterButton;




