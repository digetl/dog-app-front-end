const filterSizesReducer = (state = "", action) => {

    switch(action.type) {
        case "SELECT-SMALL":
            return state = "Small";
        case "SELECT-MEDIUM":
            return state = "Medium";
        case "SELECT-LARGE":
            return state = "Large"
        default:
            return state
    }
}

export default filterSizesReducer;