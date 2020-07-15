const filterGroupsReducer = (state = "", action) => {

    switch(action.type) {
        case "SELECT-GUNDOG":
            return state = "Gundog Group";
        case "SELECT-HOUND":
            return state = "Hound Group";
        case "SELECT-PASTORAL":
            return state = "Pastoral Groups";
        case "SELECT-TERRIER":
            return state = "Terrier Groups";
        case "SELECT-TOY":
            return state = "Toy Group";
        case "SELECT-UTILITY":
            return state = "Utility Gorup";
        case "SELECT-WORKING":
            return state = "Working Group";
        default:
            return state
    }
}

export default filterGroupsReducer;