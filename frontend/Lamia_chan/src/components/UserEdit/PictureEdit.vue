<template>
    <div>
        <div class="row">
            <div class="col-lg-10">
                <h3>Редактировать аватарку</h3>
            </div>
            <div class="col-lg-2">
                <button @click="exit()">X</button>
            </div>
        </div>
        <div class="row">
            <div class="modal-body">
                Картинка <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/> <br>
            
                    <input v-model="login" type="text" id="login" class="" required placeholder="Логин"> <br>
                    <input v-model="password"  type="password" id="password" class="" required placeholder="Пароль"> <br>
                    <input v-model="email"  type="email" id="email" class="" required placeholder="Почта">
                <div class="">
                    <button type="button" class="btn btn-primary" v-on:click="submitFile()" >Сохранить</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PictureEdit',
    props: ['url','token'],
    data(){
        return{
            email:"",
            password:"",
            login:""
        }
    },
    methods: {
        exit(){
            this.$parent.imgedit();
        },
        submitFile(){

                    let formData = new FormData();
                    
                    if (this.file != undefined){
                        formData.append('user_image', this.file);
                    }

                    formData.append('username', this.login);
                    formData.append('email', this.email);
                    formData.append('password', this.password);

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
                location.reload();
                })
                .catch(error => {
                    console.log(error.response);
                });
        },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },
    }
}
</script>