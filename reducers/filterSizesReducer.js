const filterSizesReducer = (state = "", action) => {

    switch(action.type) {
        case "SELECT-SMALL":
            return state = "Small";
        case "SELECT-MEDIUM":
            return state = "Medium";
        case "SELECT-LARGE":
            return state = "Large"
        case "RESET-SIZE-FILTER":
            return state = ""
        default:
            return state
    }
}

export default filterSizesReducer;