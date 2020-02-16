<template>
    <div id="vue">

        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/> <br>
        <button v-on:click="submitFile()">Submit</button>

    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>
<script>
import axios from 'axios'
export default {
    name: 'app',
            data(){
            return {

            file: '',

            url: {
                getManga: 'http://localhost:8000/api/v1/page/',
            },
        }
    },

      methods: {

            submitFile(){
                /*
                        Initialize the form data
                    */
                    let formData = new FormData();

                    /*
                        Add the form data we need to submit
                    */
                    formData.append('number', '1');
                    formData.append('image', this.file);
                    formData.append('chapter', '2');

                /*
                Make the request to the POST /single-file URL
                */
                    axios.post( 
                        this.url.getManga,
                        formData,
                        {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(function(){
                console.log('SUCCESS!!');
                })
                .catch(function(){
                console.log('FAILURE!!');
                });
            },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        }

    },


    beforeMount(){

    },

}

</script>
