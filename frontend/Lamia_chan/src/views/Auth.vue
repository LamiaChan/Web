<template>
    <div class="content">
        <MainHead></MainHead>
        <AuthContent></AuthContent>
    </div>
</template>

<script>
import MainHead from '../components/MainHead.vue'
import AuthContent from '../components/AuthContent'


export default {
    name: 'app',
            data(){
            return {

        }
    },
    components: {
        MainHead,
        AuthContent,
    },
}
</script>

<style scoped>
    body{
        background: #5da130;
    }
</style>