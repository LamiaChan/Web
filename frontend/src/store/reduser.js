

const initialState = {
    mainColor:{
      color: "#11998E",
      mainBack: "#fff",
      smallBack: "#e6e6e6",
      textColor: "#000"
    },
    api: {
      manga: [],
      news: []
    },
    apiLinks: {
      manga: "http://localhost:8000/api/v1/manga/",
      news: "http://localhost:8000/api/v1/news/"
    }
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
          case "SAVE_MANGA":
            newState.api.manga = action.api
            break;
          case "SAVE_NEWS":
            newState.api.news = action.api
            break;

        default:
          break;
    }

    return newState
}

export default reduser