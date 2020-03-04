import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadingStatus: 'notLoading',
        count: 1,
        todos: [],
        token_refresh: 'empty',
        token_access:  'empty',
        authStatus: 0,
        chosenTags: [],
        api: {
            mangalink1: 'http://queryberry.ru:8000/api/v1/manga',
            nonpagmangalink: 'http://queryberry.ru:8000/api/v1/nonpagmanga',
            endLink: '/?format=json',
            tags_link: 'http://queryberry.ru:8000/api/v1/tag/?format=json',
            chapter_link1: 'http://queryberry.ru:8000/api/v1/chapter/',
            token_link: 'http://queryberry.ru:8000/api/v1/token/?format=json',
            createUser_link: 'http://queryberry.ru:8000/api/v1/create/',
            userInfo_link: 'http://queryberry.ru:8000/api/v1/userinfo/',
            news_link1: 'http://queryberry.ru:8000/api/v1/news',
            allUsersLinks: 'http://queryberry.ru:8000/api/v1/show_users/'
        }
    },
    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.loadingStatus = status
        },
        SET_TODOS(state, todos){
            state.todos = todos
        },
        SET_TOKEN_REFRESH(state,token_refresh){
            state.token_refresh = token_refresh
        },
        SET_TOKEN_ACCESS(state,token_access){
            state.token_access = token_access
        },
        SET_AUTH_STATUS(state,authStatus){
            state.authStatus = authStatus
        },
        SET_CHOSEN_TAGS(state,chosenTags){
            state.chosenTags = chosenTags
        },
        SET_API(state,api){
            state.api = api
        }
    },
    actions: {
        fetchTodos(context){
            setTimeout(function(){
                context.commit('SET_LOADING_STATUS', 'loading');
            }, 2000)
        },
        writeToken_access(context,newToken_access){
            context.commit('SET_TOKEN_ACCESS', newToken_access)
        },
        writeToken_refresh(context, newToken_refresh){
            context.commit('SET_TOKEN_REFRESH', newToken_refresh)
        },
        writeAuthStatus(context, newSuthStatus){
            context.commit('SET_AUTH_STATUS', newSuthStatus)
        },
        writeChosenTags(context, newChosenTags){
            context.commit('SET_CHOSEN_TAGS', newChosenTags)
        },
        writeApi(context, newApi){
            context.commit('SET_API', newApi)
        }

    },
    getters: {
        takeLoading(state){
            return state.loadingStatus
        },
        takeToken_access(state){
            return state.token_access
        },
        takeToken_refresh(state){
            return state.token_refresh
        },
        takeAuthStatus(state){
            return state.authStatus
        },
        takeChosenTags(state){
            return state.chosenTags
        },
        takeTagsLink(state){
            return state.api.tags_link
        },
        takeMangaLink1(state){
            return state.api.mangalink1
        },
        takeNonPagMangaLink(state){
            return state.api.nonpagmangalink
        },
        takeChapterLink1(state){
            return state.api.chapter_link1
        },
        takeEndLink(state){
            return state.api.endLink
        },
        takeTokenLink(state){
            return state.api.token_link
        },
        takeCreateUserLink(state){
            return state.api.createUser_link
        },
        takeUserInfoLink(state){
            return state.api.userInfo_link
        },
        takeNewsLink(state){
            return state.api.news_link1
        },
        takeAllUsersLinks(state){
            return state.api.allUsersLinks
        }

    }
})