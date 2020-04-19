export const changeColor = (status) =>{
    return  {type:'CHANGE_COLOR', status:status}
}
export const saveManga = (api) =>{
    return  {type:'SAVE_MANGA', api:api}
}
export const saveNews = (api) =>{
    return  {type:'SAVE_NEWS', api:api}
 }
 export const saveTags = (api) =>{
    return  {type:'SAVE_TAGS', api:api}
 }