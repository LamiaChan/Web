<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">
                <h2>Недавно обновленные</h2>
                <div class="row">
                    
                    <!-- добавить сортировку по дате обнавления (testapione.updated) 
                    .sort( (a,b) => b.chapter_set.updated.localeCompare(a.chapter_set.updated) )-->

                    <div class="col-md-3" v-for="(testapione,index) in testapi" :key="index">
                        <router-link v-bind:to="'/detail/'+ testapione.id">
                            <div class="manga">
                                <div class="manga__img">
                                    <img :src="testapione.preview_image_url"   alt="" class="manga__img__pict">
                                    <span class="manga__title">{{ testapione.title }}</span>
                                </div>
                            </div>
                        </router-link>
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
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .manga__img__pict{
        width: 80%;
        max-height: 290px;
    }
    .manga__title{
        font-size: 15px;
        color: #fff;
        display:inline-block;
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
<!-- Global styles -->
<style>
.notFound{
    text-align: center;
    margin-top: 50px;
}
</style>