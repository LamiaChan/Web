export async function takeApi(link){
    try{
      const response = await fetch(link)
      const data = await response.json()
      if(data.results !== undefined){
        return data.results
      }
      else{
        return data
      }
    }
    catch(err){
      console.log(err)
    }
  }
