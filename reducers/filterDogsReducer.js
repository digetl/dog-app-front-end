const filterDogsReducer = (state = "", action) => {

    switch(action.type) {
        case "SELECT-BREED":
            return state = "Breed";
        case "SELECT-SIZE":
            return state = "Size";
        case "SELECT-GROUP":
            return state = "Group"
        default:
            return state
    }
}

export default filterDogsReducer;