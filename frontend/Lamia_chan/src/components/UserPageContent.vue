<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="leftBar">
                        <div class="imgContainer"><img :src="user.user_image" class="userImg" alt=""></div>
                        <div><button class="btn btn-outline-dark userButton">Загрузить фото</button></div>
                        <div><span class="userName">{{user.username}}</span></div>
                        <div><span class="userEmail">{{user.email}}</span></div>
                        <div><span class="userAbout">О себе: {{user.user_moto}}</span></div>
                        <div><button @click="exitAccount()" class="exitButton">Выйти</button></div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="UserMaiN"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'user',
    data(){
        return {
            user: [],
            url:{
                getUserInfo: 'http://localhost:8000/api/v1/userinfo/'
            },
            token: '',
        }
    },
    methods: {
        takeTag(){

            this.token = localStorage.getItem('token_access');

            if (this.token != 'empty'){

                axios.get(this.url.getUserInfo, {
                    
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })
                .then((response) => {
                     console.log(response);
                     this.user = response.data;
                      console.log(this.user.username)
                })
                .catch(error => {
                    //console.log(error.response);
                    if (error.response.statusText == "Unauthorized"){
                        // перенапроавить на страницу аунтификациии 
                        this.$router.push('/auth');
                    }

                });

            }
        },
        exitAccount(){
            window.localStorage.setItem('token_access','empty')
            window.localStorage.setItem('token_refresh','empty')
            this.$store.dispatch('writeToken_access', 'empty')
            this.$store.dispatch('writeToken_refresh', 'empty')
            this.$router.push('/auth');
        }
    },
    beforeMount(){
      this.takeTag()
    },
}
</script>

<style scoped>
.userImg{
    width: 250px;
}
.leftBar{
    height: 500px;
    margin-top: 30px;
    text-align: center;
    border: 2px #93a0ad solid;
    padding-top: 20px;
}
.imgContainer{
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    background: #93a0ad;
}
.userName, .userEmail, .userAbout{
    display: inline-block;
    font-size: 20px;
    margin-top: 20px;
}
.userButton{
    margin-top: 10px;
}

</style>