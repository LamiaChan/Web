//Main function for API request
//This function recive link for query
export async function takeApi(link){
    try{
      //User fetch
      const response = await fetch(link)
      const data = await response.json()
      //Because of paginations we have two cases:
      //1)Manga api has paginations, so we have to take .results of our responce object
      if(data.results !== undefined){
        return data.results
      }
      //If it's not manga (like news, users etc) we return data
      else{
        return data
      }
    }
    catch(err){
      console.log(err)
    }
  }
