<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3" v-for="(testapione,index) in testapi" :key="index">
                        <div class="manga">
                            <h3 class="manga__title">{{ testapione.title }}</h3>
                            <div class="manga__img">
                                <img src="" alt="" class="manga__img__pict">
                            </div>
                            <div class="manga__text">
                                {{ testapione.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>




<script>
export default {
        props: ['testapi'],
}
</script>

<style scoped>
    .mainManga{
        margin-top: 40px;
    }
    .manga{
        text-align: center;
    }
</style>