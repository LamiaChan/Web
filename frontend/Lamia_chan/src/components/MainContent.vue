<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">
                <div class="row">
                    <div class="col-md-3" v-for="(testapione,index) in testapi" :key="index">
                        <a v-bind:href="'/detail/'+ testapione.id">
                            <div class="manga">
                                <div class="manga__img">
                                    <img :src="testapione.preview_image_url"   alt="" class="manga__img__pict">
                                    <span class="manga__title">{{ testapione.title }}</span>
                                </div>
                            </div>
                        </a>
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
    .manga__img__pict{
        width: 80%;
    }
    .manga__title{
        font-size: 15px;
        color: #fff;
        display:block;
        width: 80%;
        height: 49px;
        padding: 3px;
        left: 10%;
        background-color: rgba(0, 0, 0, 0.7);
        position:absolute;
        top:83%;

    }
    .manga__img{
        display:inline-block;
        position: relative;
    }
</style>