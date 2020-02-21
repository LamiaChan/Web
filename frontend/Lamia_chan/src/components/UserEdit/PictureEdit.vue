<template>
    <div>
        <div class="row">
            <!--
            
                Картинка <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/> <br>
                    <div class="inputStye"><input v-model="login" type="text" id="login" class=""  required placeholder="Логин"></div> 
                    <div class="inputStye"><input v-model="email"  type="email" id="email" class="" required placeholder="Почта"></div>
                    <div class="inputStye"><input v-model="password"  type="password" id="password" class="" required placeholder="Пароль"></div>
                <div class="">
                    <button type="button" class="btn btn-primary" v-on:click="submitFile()" >Сохранить</button>
                </div>
                -->

            <div class="col-lg-12">
                <div class="form-style-5">
                    <fieldset>
                    <legend><span class="number">1</span> Основная информация
                        <button @click="exit()" class="exitButton"><i class="fa fa-times"></i></button>
                    </legend>
                    <input type="text" name="field1" v-model="login">
                    <input type="email" name="field2" v-bind:class="{ errorInput: emailError }" v-model="email" v-on:change="checkEmail()">
                    <small class="helper-text invalid" v-if="email=='' || checkEmail()">
                    Некорректный Email</small>
                    <textarea name="field3" v-model="about" placeholder="Информаци о себе"></textarea>    
                    </fieldset>
                    <fieldset class="input__wrapper">
                        <legend><span class="number">2</span> Фото профиля</legend>
                        <div class="fileform">
                            <div id="fileformlabel">{{filename}}</div>
                            <div class="selectbutton">Обзор</div>
                            <input class="photoButton" type="file" id="upload" ref="file" v-on:change="handleFileUpload()"/>
                        </div>
                        
                    </fieldset>
                    <button type="submit" class="btn btn-primary" v-on:click="submitFile()" >Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PictureEdit',
    props: ['url','token', 'user'],
    data(){
        return{
            email:"",
            password:"",
            login:"",
            about:"Информация о себе",
            filename:"Не выбранно",
            emailError: 0,
        }
    },
    methods: {
        exit(){
            this.$parent.imgedit();
        },
        submitFile(){

                    let formData = new FormData();
                    

                    var english = /^[A-Za-z0-9]*$/;
                    var email_regx = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;

                    this.errors = [];

                    if(!this.login){
                        this.errors.push('Требуется указать имя.');
                    } 
                    else if(!english.test(this.login)) {
                        this.errors.push('Используйте латиницу');
                    }
                    else{
                    if (this.file != undefined){
                        formData.append('user_image', this.file);
                    }

                    formData.append('username', this.login);
                    formData.append('email', this.email);
                    //formData.append('password', this.password);
                    formData.append('user_moto', this.about);

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
                }
        },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            this.filename = this.file.name;
            console.log(this.file);
        },
        standartSettings(){
            this.email = this.user.email
            this.login = this.user.username
            this.about = this.user.user_moto
        },
        checkEmail(){
            var email_regx = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
            if(email_regx.test(this.email)){
                console.log('ok')
                return 0
            }
            else{
                console.log('no ok')
                this.emailError = 1;
                return 1
            }
        }
    },
    beforeMount(){
        this.standartSettings()
    }
}
</script>

<style scoped>
.form-style-5{
	max-width: 500px;
	padding: 10px 20px;
	background: #f4f7f8;
	margin: 10px auto;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-5 fieldset{
	border: none;
}
.form-style-5 legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}
.form-style-5 label {
	display: block;
	margin-bottom: 8px;
}
.form-style-5 input[type="text"],
.form-style-5 input[type="date"],
.form-style-5 input[type="datetime"],
.form-style-5 input[type="email"],
.form-style-5 input[type="number"],
.form-style-5 input[type="search"],
.form-style-5 input[type="time"],
.form-style-5 input[type="url"],
.form-style-5 textarea,
.form-style-5 select {
	font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box; 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; 
	background-color: #e8eeef;
	color:#7a7c7e;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	margin-top: 30px;
}
.form-style-5 input[type="text"]:focus,
.form-style-5 input[type="date"]:focus,
.form-style-5 input[type="datetime"]:focus,
.form-style-5 input[type="email"]:focus,
.form-style-5 input[type="number"]:focus,
.form-style-5 input[type="search"]:focus,
.form-style-5 input[type="time"]:focus,
.form-style-5 input[type="url"]:focus,
.form-style-5 textarea:focus,
.form-style-5 select:focus{
	background: #d2d9dd;
}
.form-style-5 select{
	-webkit-appearance: menulist-button;
	height:35px;
}
.form-style-5 .number {
	background: #1abc9c;
	color: #fff;
	height: 30px;
	width: 30px;
	display: inline-block;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-align: center;
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	border-radius: 15px 15px 15px 0px;
}

.form-style-5 button[type="submit"],
.form-style-5 input[type="button"]
{
	position: relative;
	display: block;
	padding: 19px 39px 18px 39px;
	color: #FFF;
	margin: 0 auto;
	background: #1abc9c;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 100%;
	border: 1px solid #16a085;
	border-width: 1px 1px 3px;
	margin-bottom: 10px;
    transition-duration: .5s;
}
.form-style-5 button[type="submit"]:hover,
.form-style-5 input[type="button"]:hover
{
	background: #109177;
}
.photoButton{
    background: #1abc9c;
	color: #fff;
}
.fileform { 
    background-color: #e8eeef;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    cursor: pointer;
    height: 26px;
    overflow: hidden;
    padding: 2px;
    position: relative;
    text-align: left;
    vertical-align: middle;
    width: 230px;
    margin-bottom: 30px;
}
 
.fileform .selectbutton { 
    background-color: #1abc9c;
    border: 1px solid #1abc9c;
    border-radius: 2px;
    color: #FFFFFF;
    float: right;
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    width: 50px;
}
 
.fileform #upload{
    position:absolute; 
    top:0; 
    left:0; 
    width:100%; 
    -moz-opacity: 0; 
    filter: alpha(opacity=0); 
    opacity: 0; 
    font-size: 150px; 
    height: 30px; 
    z-index:20;
}
.fileform #fileformlabel { 
    background-color: #e8eeef;
    color:#7a7c7e;
    font-size: 15px;
    float: left;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    text-align: left;
    vertical-align: middle;
    width:160px;
}
.exitButton{
    background: #cccdce;
    color: #000;
    width: 30px;
    height: 30px;
    border: 2px #cccdce solid;
    border-radius: 2px;
    text-align: center;
    padding: 0;
    line-height: 30px;
    vertical-align: middle;
    float: right;
    transition-duration: .5s;

}
.exitButton:hover{
    color: #16a085;
}
.errorMassage{
    color: red;
}
.errorInput{
    border: 1px red solid;
}
</style>