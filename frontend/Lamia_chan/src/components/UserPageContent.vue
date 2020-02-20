<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="leftBar">
                        <div class="imgContainer"><img :src="user.user_image" class="userImg" alt=""></div>
                        <div><button class="btn btn-outline-dark userButton" data-toggle="modal" data-target="#editModal">Редактировать</button></div>
                        <div><button @click="imgedit()">Редактировать картинку</button></div>
                        <div><span class="userName">{{user.username}}</span></div>
                        <div><button @click="nameedit()">Редактировать имя</button></div>
                        <div><span class="userEmail">{{user.email}}</span></div>
                        <div><button @click="emailedit()">Редактировать email</button></div>
                        <div><span class="userAbout">О себе: {{user.user_moto}}</span></div>
                        <div><span class="userAbout">Звание: {{user.rank}}</span></div>
                        <div><button @click="exitAccount()" class="blubtn">Выйти</button></div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="UserMain">
                        <PictureEdit v-if="editPict==1" :url="url" :token="token" />
                        <NameEdit v-if="editName==1" :url="url" :token="token" />
                        <EmailEdit v-if="editEmail==1" :url="url" :token="token" />
                    </div>
                </div>
            </div>

            <!-- modal windows -->

            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Редактирования профиля</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Картинка <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/> <br>
                    <!--
                        <div id="formContent">
                            <input v-model="login" type="text" id="login" class="fadeIn second" required placeholder="Логин"> <br>
                            <input v-model="pass"  type="password" id="password" class="fadeIn third" required placeholder="Пароль"> <br>
                            <input v-model="email"  type="email" id="email" class="fadeIn third" required placeholder="Почта">
                        </div>
                    -->

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="submitFile()" >Сохранить</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PictureEdit from '../components/UserEdit/PictureEdit.vue'
import NameEdit from '../components/UserEdit/NameEdit.vue'
import EmailEdit from '../components/UserEdit/EmailEdit.vue'
export default {
    name: 'user',
    components: {
        PictureEdit,
        NameEdit,
        EmailEdit,
    },
    data(){
        return {
            user: [],
            editPict: 0,
            editName: 0,
            editEmail: 0,
            url:{
                getUserInfo: 'http://localhost:8000/api/v1/userinfo/'
            },
            token: '',
        }
    },
    methods: {
            submitFile(){

                    let formData = new FormData();


                    
                    //formData.append('username', this.user.username);
                    formData.append('email', 'test@test.ru');
                    formData.append('user_image', this.file);
                    //formData.append('user_moto', this.user.user_moto);



 
                    axios.put( 
                        this.url.getUserInfo,
                        formData,
                        {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${this.token}`
                        }
                    }
                    ).then(function(){
                console.log('SUCCESS!!');
                })
                .catch(error => {
                    console.log(error.response);
                });
            },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },

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
        },
        imgedit(){
            if (this.editPict != 1){
                this.editPict = 1;
            }
            else{
                this.editPict = 0;
            }
        },
        nameedit(){
            if (this.editName != 1){
                this.editName = 1;
            }
            else{
                this.editName = 0;
            } 
        },
        emailedit(){
            if (this.editEmail != 1){
                this.editEmail = 1;
            }
            else{
                this.editEmail = 0;
            } 
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
    height: 530px;
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