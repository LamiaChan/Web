<template>
    <div>
        <MainHead></MainHead>
        <RegisterContent></RegisterContent>
    </div>
</template>

<script>
import MainHead from '../components/MainHead.vue'
import RegisterContent from '../components/RegisterContent'

export default {
    name: 'register',
    components: {
        MainHead,
        RegisterContent,
    },
    
}
</script>