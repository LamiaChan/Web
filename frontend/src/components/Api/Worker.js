//Main function for API request
//This function recive link, type, and body
//link it is link for api to ex.
//Type it is request type
//Body it is body of request if it is post xD example: { username: userName, password: password, email: email }

export async function Worker(link, type='get', body=''){
  if(type === 'get'){
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
    if(type === 'post' && body !== '') {
      try {

        //TODO Добавить проверку на то что запрос был успешно обработанн
      
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        };
        
        const response = await fetch(link, requestOptions);
        const data = await response.json();

        return data

      }

      catch(err) {
        console.log(err)
      }
    }
  }
