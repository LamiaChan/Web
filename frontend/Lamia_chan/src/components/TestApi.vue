<template>
    <ul>
        <li v-for="(testapione,index) in testapi" :key="index">{{testapione}}</li>
    </ul>
</template>

<script>
export default {
    props: ['testapi'],
}
</script>