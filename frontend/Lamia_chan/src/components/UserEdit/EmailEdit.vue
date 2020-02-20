<template>
    <div>
        <div class="row">
            <div class="col-lg-10">
                <h3>Редактировать почту</h3>
            </div>
            <div class="col-lg-2">
                <button @click="exit()">X</button>
            </div>
        </div>
        <div class="row">
            <div class="modal-body">
                Email <input v-model="email" type="text" id="email" class="fadeIn second" required placeholder="email"> 
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
</template>

<script>
import axios from 'axios'
export default {
    name: 'NameEdit',
    props: ['url','token'],
    data(){
        return{
            email: ""
        }
    },
    methods: {
        exit(){
            this.$parent.emailedit();
        },
        submitFile(){

                    let formData = new FormData();
                    console.log(this.email)

                    //formData.append('username', this.login);
                    formData.append('email', this.email);
                    //formData.append('user_image', this.file);
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
                location.reload();
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
    }
}
</script>