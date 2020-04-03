

const initialState = {
    mainColor: "#11998E"
}

const reduser = (state = initialState, action) => {
    const newState = {...state}

    switch (action.type) {
        case "CHANGE_COLOR":
            newState.mainColor = "#8a2be2"
            break;
    
        default:
            break;
    }

    return newState
}

export default reduser