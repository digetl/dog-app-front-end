export const loginUser = (user) => {
    return {
        type: "LOGIN-USER",
        user: user
    }
}

export const loginError = (error) => {
    return {
        type: "LOGIN-ERROR",
        error: error
    }
}
