const selectDogReducer = (state = null, action) => {

    if (action.type === "SELECT-DOG"){
        return state = action.dog
    }
    return state
    
}

export default selectDogReducer;