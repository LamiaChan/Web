<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="leftBar">
                        <div class="imgContainer"><img src="" class="userImg" alt=""></div>
                        <div><button class="btn btn-outline-dark userButton">Загрузить фото</button></div>
                        <div class="borderG"><span class="userName">{{user.username}}</span></div>
                        <div class="borderG"><span class="userEmail">{{user.email}}</span></div>
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
        }
    },
    beforeMount(){
      this.takeTag()
    },
}
</script>

<style scoped>
.leftBar{
    height: 500px;
    margin-top: 30px;
    text-align: center;
    border: 2px #38ef7d solid;
    border-radius: 8px;
    padding-top: 20px;
}
.imgContainer{
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    background: #38ef7d;
}
.userName, .userEmail{
    font-size: 20px;
    margin-top: 20px;
}
.userButton{
    margin-top: 10px;
}
.borderG{
        border-bottom: 2px #38ef7d solid;
        margin-top: 20px;
}
</style>