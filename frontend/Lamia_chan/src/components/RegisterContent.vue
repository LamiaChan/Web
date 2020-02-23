<template>
    <div id="vue">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                    <h1>Регистрация</h1>
                </div>

                    <input v-model="login" type="text" id="login" class="fadeIn second" required placeholder="Логин">
                    <input v-model="pass"  type="password" id="password" class="fadeIn third" required placeholder="Пароль">
                    <input v-model="email"  type="email" id="email" class="fadeIn third" required placeholder="Почта">
                    <input v-on:click="sub" type="submit" class="fadeIn fourth" value="Зарегистрироваться">

                <div id="formFooter">
                    <router-link class="nav-link" to="/auth">Есть аккаунт?</router-link>
                </div>
                

                <div v-for="(err,index) in errors" :key="index">
                    {{err}}
                </div>
                
                <div v-for="(succ,index) in successful" :key="index">
                    {{succ}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'register',
     data(){
            return {
            manga: [],
            errors: [],
            successful: [],
            page_type: "",
            login: "",
            pass: "",
            email: "",
            token_refresh: "",
            token_access: "",
            url: {
                getToken: this.$store.getters.takeTokenLink,
                createUser: this.$store.getters.takeCreateUserLink
            },
        }
    },
    methods: {

        getPageUrl(){

            var currentUrl = window.location.pathname;

            var params = currentUrl.split('/');

                //this.page_type == params[params.length-1];
                //console.log(this.page_type);
                return params[params.length-1];
                //console.log(params[params.length-1]);
        },

        sub: function(event){

            var email_regx = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;

            this.errors = [];
            this.successful = [];
            
            if(!this.pass){
                this.errors.push('Требуется указать пароль.');
            } else {
                 if(this.pass.length < 6){
                    this.errors.push('Пароль дожен быть длинее 6 символов');
                }
            }

            if(!this.email){
                this.errors.push('Введите email');
            } else {
                if(!email_regx.test(this.email)){
                    this.errors.push('Уверены, что email введен верно?');
                }
            }
                

            if(this.errors.length == 0){
                    axios.post(this.url.createUser,{
                        "username": this.login,
                        "email": this.email,
                        "password": this.pass
                        
                    })
                    .then(response => { 
                        this.successful.push('Аккаунт создан'); 
                        console.log(response.data);
                        this.login = '';
                        this.pass = '';
                        this.email = '';
                        this.$router.push('/auth');

                        /*
                            this.token_refresh = response.data.refresh;
                            this.token_access = response.data.access;
                            this.createLocalStorage()
                        */

                    })
                    .catch(error => {
                        console.log(error.response);
                        //this.errors.push('Не верный логин или пароль'); 

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
    },

    beforeMount(){

    },

}
</script>