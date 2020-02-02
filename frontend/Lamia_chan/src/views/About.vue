<template>
    <div class="content">
        <MainHead></MainHead>
        <AboutContent></AboutContent>
    </div>
</template>

<script>
import MainHead from '../components/MainHead.vue'
import AboutContent from '../components/AboutContent'


export default {
    name: 'app',
            data(){
            return {

        }
    },
    components: {
        MainHead,
        AboutContent,
    },
}
</script>

<style scoped>
    body{
        background: #5da130;
    }
</style>