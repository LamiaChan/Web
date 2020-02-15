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
        chosenTags: []
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
        }
    }
})