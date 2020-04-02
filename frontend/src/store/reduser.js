

const initialState = {
    test: "Welcome to Redux!"
}

const reduser = (state = initialState, action) => {
    const newState = {...state}

    return newState
}

export default reduser