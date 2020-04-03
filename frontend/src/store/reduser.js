

const initialState = {
    mainColor: "#11998E"
}

const reduser = (state = initialState, action) => {
    const newState = {...state}

    switch (action.type) {
        case "CHANGE_COLOR":
            state.mainColor === "#11998E" ? newState.mainColor = "#8a2be2" : newState.mainColor = "#11998E"
            break;
    
        default:
            break;
    }

    return newState
}

export default reduser