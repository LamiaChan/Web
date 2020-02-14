<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="leftBar">
                        <div class="imgContainer"><img src="" class="userImg" alt=""></div>
                        <div><button class="btn btn-outline-dark userButton">Загрузить фото</button></div>
                        <div><span class="userName">name</span></div>
                        <div><span class="userEmail">email</span></div>
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

                // axios.get('http://localhost:8000/api/v1/userinfo', {
                //     Authorization: 'Bearer ' + this.token 
                // }).then((response) => {
                //     console.log(response);
                // })

                axios.get(this.url.getUserInfo, {
                    
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                }).then((response) => {
                     console.log(response);
                })

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
    background-color: skyblue;
    text-align: center;
}
.imgContainer{
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    background: yellow;
}
.userName, .userEmail{
    font-size: 20px;
    margin-top: 20px;
}
.userButton{
    margin-top: 10px;
}
</style>