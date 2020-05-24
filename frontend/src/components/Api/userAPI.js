import axios from 'axios';

   async function getUser(link) {
    const currentToken  = localStorage.getItem('token-access')
    let body = {
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer '+ currentToken
      },
    }
    var userArray = [];
    await axios
      .get(link, body)
      .then(function(response) {
            userArray = response.data
        })
    .catch(function(error){
        console.log(error);
    });

    return userArray
  }

export default getUser