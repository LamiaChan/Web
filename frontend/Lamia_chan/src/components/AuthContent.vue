<template>
    <div id="vue">
        <input v-model="login" placeholder="Login">
        <input v-model="pass" placeholder="pass">
        <button v-on:click="sub">send</button>
        <p>token_access: {{token_access}}</p>
        <br>
        <p>token_refresh: {{token_refresh}}</p>
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>
<script>
import axios from 'axios'
export default {
    name: 'app',
            data(){
            return {
            manga: [],
            login: "",
            pass: "",
            token_refresh: "",
            token_access: "",
            url: {
                loginlink: 'http://localhost:8000/api/v1/token/?format=json'
            },
        }
    },

    methods: {

        sub: function(event){
          
          if(this.login == "" || this.pass == ""){
            
            this.token = "type something.";
            //event.preventDefault();
          }else{

            axios.post(this.url.loginlink,{
                "username": this.login,
                "password": this.pass
                
            })
            .then(response => { 
                console.log(response)
                this.token_refresh = response.data.refresh;
                this.token_access = response.data.access;
                this.createLocalStorage()
            })
            .catch(error => {
                console.log(error.response)
                this.token = error.response
            });
          }   
          
      },
      takeToken_access(){
          return this.$store.getters.takeToken_access;
      },
      takeToken_refresh(){
          return this.$store.getters.takeToken_refresh;
      },
      rewriteTokens(){
          if(this.token_refresh && this.token_access){
            this.$store.dispatch('writeToken_access', this.token_access)
            this.$store.dispatch('writeToken_refresh', this.token_refresh)
          }
      },
      createLocalStorage(){
            this.rewriteTokens()
            window.localStorage.setItem('token_access',this.takeToken_access())
            window.localStorage.setItem('token_refresh',this.takeToken_refresh())
      }
    }

}

</script>
