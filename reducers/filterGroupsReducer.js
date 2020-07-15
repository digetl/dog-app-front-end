const filterGroupsReducer = (state = "", action) => {

    switch(action.type) {
        case "SELECT-GUNDOG":
            return state = "Gundog Group";
        case "SELECT-HOUND":
            return state = "Hound Group";
        case "SELECT-PASTORAL":
            return state = "Pastoral Group";
        case "SELECT-TERRIER":
            return state = "Terrier Group";
        case "SELECT-TOY":
            return state = "Toy Group";
        case "SELECT-UTILITY":
            return state = "Utility Gorup";
        case "SELECT-WORKING":
            return state = "Working Group";
        case "RESET-GROUP-FILTER":
            return state = ""
        default:
            return state
    }
}

export default filterGroupsReducer;