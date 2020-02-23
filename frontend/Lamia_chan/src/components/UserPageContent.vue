<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="leftBar">
                        <div class="imgContainer"><img :src="users.user_image" class="userImg" alt=""></div>
                        <div><button v-if="user.id == users.id" class="btn btn-outline-dark userButton" @click="imgedit()" >Редактировать</button></div>
                        <div><span class="userName">{{users.username}}</span></div>
                        <div><span class="userEmail">{{users.email}}</span></div>
                        <div><span class="userAbout">О себе: {{users.user_moto}}</span></div>
                        <div><span class="userAbout">Звание: {{users.rank}}</span></div>
                        <div><button v-if="user.id == users.id" @click="exitAccount()" class="blubtn">Выйти</button></div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="UserMain">
                        <PictureEdit v-if="(editPict==1)&&(user.id == users.id)" :url="url" :token="token" :user="user" />
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PictureEdit from '../components/UserEdit/PictureEdit.vue'
export default {
    name: 'user',
    components: {
        PictureEdit
    },
    data(){
        return {
            user: [],
            editPict: 0,
            users: [],
            url:{
                getUserInfo: this.$store.getters.takeUserInfoLink,
                getUserList: 'http://localhost:8000/api/v1/show_users/' + this.getPageUrl() + '/?format=json'
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
                      console.log(this.user.id)
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
        getUserList(){
            axios.get(this.url.getUserList).then((response) => {
                this.users = response.data;
                console.log("Users:",this.users)

            });
        },
        getPageUrl(){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }
            console.log(params[params.length-1])
            return params[params.length-1];
        },
        exitAccount(){
            window.localStorage.setItem('token_access','empty')
            window.localStorage.setItem('token_refresh','empty')
            this.$store.dispatch('writeToken_access', 'empty')
            this.$store.dispatch('writeToken_refresh', 'empty')
            this.$router.push('/auth');
        },
        imgedit(){
            console.log('kek'+this.emailError)
            if (this.editPict != 1){
                this.editPict = 1;
            }
            else{
                this.editPict = 0;
            }
        }
    },
    beforeMount(){
      this.takeTag(),
      this.getUserList()
    },
}
</script>

<style scoped>
.userImg{
    width: 250px;
}
.leftBar{
    min-height: 530px;
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
button.blubtn {
  width:90px;
  background-color: #fff;
  text-align:center;
  display:block;
  font-family: arial;
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
  border: #1071FF 1px solid;
  color: #1071FF;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
   margin: 20px auto;
  transition: .5s;
  border-radius: 5px;
}
button.blubtn:hover {
  top: 5px;
  transition: .5s;
  color: red;
  border: red 1px solid;
  border-radius: 10px;
}
button.blubtn:active {
  color: #000;
  border: #1A1A1A 1px solid;
  transition: .07s;
  background-color: #FFF;
}

</style>