<template>
    <div>
        <MainHead />
        <UserPageContent />
    </div>
</template>

<script>
import MainHead from '../components/MainHead.vue'
import UserPageContent from '../components/UserPageContent'
export default {
    name: 'mypage',
    components: {
        MainHead,
        UserPageContent
    },

}
</script>