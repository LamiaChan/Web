

const initialState = {
    mainColor:{
      color: "#11998E",
      mainBack: "#fff",
      smallBack: "#e6e6e6",
      textColor: "#000",
      genres: "#D3F6F0"
    },
    api: {
      manga: [],
      news: [],
      tags: []
    },
    apiLinks: {
      manga: "http://localhost:8000/api/v1/manga/",
      news: "http://localhost:8000/api/v1/news/",
      tags: "http://localhost:8000/api/v1/tag/"
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
              textColor: "#fff",
              genres: "#cf4a76"
            }
            const lightColor = {
              color: "#11998E",
              mainBack: "#fff",
              smallBack: "#e6e6e6",
              textColor: "#000",
              genres: "#D3F6F0"
            }
            action.status ? newState.mainColor = darkColor : newState.mainColor = lightColor
            break;
          case "SAVE_MANGA":
            newState.api.manga = action.api
            break;
          case "SAVE_NEWS":
            newState.api.news = action.api
            break;
          case "SAVE_TAGS":
            newState.api.tags = action.api
            break;

        default:
          break;
    }

    return newState
}

export default reduser