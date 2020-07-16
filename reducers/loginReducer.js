const loginReducer = (state = {}, action) => {

    switch(action.type) {
        case "LOGIN-USER":
            return state = `Welcome ${action.user}`;
        case "LOGIN-ERROR":
            return state = action.error;
        default:
            return state
    }
}

export default loginReducer;