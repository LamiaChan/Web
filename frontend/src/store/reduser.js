

const initialState = {
    mainColor:{
      color: "#11998E",
      mainBack: "#fff",
      smallBack: "#e6e6e6",
      textColor: "#000"
    },
    api: []
}

const reduser = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type) {
        case "CHANGE_COLOR":
            const darkColor = {
              color: "#B52556",
              mainBack: "#000",
              smallBack: "#1F1F1F",
              textColor: "#fff"
            }
            const lightColor = {
              color: "#11998E",
              mainBack: "#fff",
              smallBack: "#e6e6e6",
              textColor: "#000"
            }
            action.status ? newState.mainColor = darkColor : newState.mainColor = lightColor
            break;
          case "TAKE_API":
            newState.api = action.api
            break;

        default:
          break;
    }

    return newState
}

export default reduser