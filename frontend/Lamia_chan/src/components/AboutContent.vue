<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="aboutContainer">
                    <h1>О нас</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <p class="about__text">
                    Тестовый проект <a href="https://vk.com/derpyhowes">Марка</a> и <a href="https://vk.com/lost_inn_dark">Паши</a>, вот наш репозиторий <a href="https://github.com/mar4elkin/Lamia_chan_web">github</a>.
                    Почему Lamia chan? Во первых референс в сторону <a href="https://dailylifewithamonstergirl.fandom.com/wiki/Miia#cite_note-Volume_1_Omakes-0">мии</a>, а во вторых проект написанн на <u>python</u> 🐍 django + vue js 
                    вот и все :-). Помощь приветствуется. <br> TODO:
                </p> 
                <p class="about__text">
                    <br> 1) <s>улучшить поиск (чтобы он искал не только по перым буквам) сделать проверку на последний элемент и сделать прокрутку</s> <a href="https://github.com/mar4elkin/Lamia_chan_web/commit/cf2ca7ca9faf953d0b868bf33018546d9b8c7ffc">done</a>
                    <br> 2) <s>доделать главную страницу, а именно название</s>
                    <br> 3) <s>релевантность манги по дате, остался фронт</s> <a href="https://github.com/mar4elkin/Lamia_chan_web/commit/3a9ce53f1a3a239fe2eed27e17ca5e0888e0cebe">done</a>
                    <br> 4) <s>работа с пользователями, аунтификация и авторизация через api, остался фронт -- это будет тяжело </s> <a href="https://github.com/mar4elkin/Lamia_chan_web/commit/eebe86b6ced6f347f07507512a583f93334839d0">done</a> &nbsp; and &nbsp;
                     <a href="https://github.com/mar4elkin/Lamia_chan_web/commit/c826cdeeb3e4c07b33b24ac2e28b121736d8f22c">vuex</a>
                    <br> 5) <s>переделать страницу детального просмотра манги, в процессе</s>
                    <br> 6) <s>на странице чтения добавить проверку на последнию страницу и если она токова открыть следующею главу   </s>
                    <br> 7) <s>на стронице чтения и детальный странице добавить главы в select и страницы </s>
                    <br> 8) Добавить систему оценки манги 
                    <br> 9) Добавить систему загрузки манги
                    <br> 10) <s>Пофиксить баг на странице выбраного тегов и доверстать стрницу со всеми тэгами</s>
                    <br> 11) начать делать приложения для ios и <a href="https://github.com/mar4elkin/lamia_chan_android">android</a>
                    <br> 12) разбить логику на компоненты 
                    <br> 13) переделать стрицу пользователя, чтобы на нее могли зайти другие 
                    <br> 14) <b> перенести обращение к api в другое место #TODO</b> 
                    <br> 15) на страницые maincontent изменить запрос к api сделать пагинцию (остался фронт)
                    <br> 16) <b>сделать "праильную сортировку" по дате побликации последний главы</b>
                    <br> 17) lazyload для картинок
                    <br> 18) <b> Сделать, чтобы при закрытии вкладки не менялся токен на бэке </b>
                    <br> 19) Сделать пункт "Запомнить меня" при логине (для этого сначала нужно закрыть пункт 18)
                    <br> 20) <b>Сделать загрузку аватарки пользователя</b>
                    <br> 21) <s> Сделать lazy load routers </s>
                    
                </p> 
                
            </div>
        </div>

        <br>

        <div class="container last_commits">
          <div class="row">
            <div class="col">
                <h5>Lamia_chan_web commits</h5>
                <ul>
                    <li v-for="(web,index) in lamia_chan_web" :key="index">
                        <a :href="web.html_url" target="_blank" class="commit">{{ web.sha.slice(0, 7)}}</a>
                        - <span class="message">{{ web.commit.message }}</span><br>
                        by <span class="author"><a :href="web.author.html_url" target="_blank">{{ web.commit.author.name }}</a></span>
                        at <span class="date">{{ web.commit.author.date }}</span>
                    </li>
                </ul>
            </div>

            <div class="col">
                <h5>Lamia_chan_android commits</h5>
                <ul>
                    <li v-for="(app,index) in lamia_chan_android" :key="index">
                        <a :href="app.html_url" target="_blank" class="commit">{{ app.sha.slice(0, 7)}}</a>
                        - <span class="message">{{ app.commit.message }}</span><br>
                        by <span class="author"><a :href="app.author.html_url" target="_blank">{{ app.commit.author.name }}</a></span>
                        at <span class="date">{{ app.commit.author.date }}</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'about',
    data(){
        return {
            lamia_chan_web: [],
            lamia_chan_android: [],
            url:{
                lamia_chan_web_commits: 'https://api.github.com/repos/mar4elkin/Lamia_chan_web/commits?per_page=3&sha=',
                lamia_chan_android_commits: 'https://api.github.com/repos/mar4elkin/Lamia_chan_android/commits?per_page=3&sha='
            },
            token: '',
        }
    },
    methods: {
        takeTag(){
                axios.get(this.url.lamia_chan_web_commits, {
                })
                .then((response) => {
                     console.log(response);
                     this.lamia_chan_web = response.data
                })
                .catch(error => {
                    //console.log(error.response);
                });

                axios.get(this.url.lamia_chan_android_commits, {
                })
                .then((response) => {
                     console.log(response);
                     this.lamia_chan_android = response.data
                })
                .catch(error => {
                    //console.log(error.response);
                });
        }
    },
    beforeMount(){
      this.takeTag()
    },
}
</script>

<style scoped>
    .aboutContainer{
        text-align: center;
    }
</style>