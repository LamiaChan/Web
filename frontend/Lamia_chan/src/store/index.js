import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadingStatus: 'notLoading',
        count: 1,
        todos: [],
        token_refresh: 'empty',
        token_access:  'empty'
    },
    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.loadingStatus = status
        },
        SET_TODOS(state, todos){
            state.todos = todos
        },
        SET_TOKEN(state,token){
            state.token = token
        }
    },
    actions: {
        fetchTodos(context){
            setTimeout(function(){
                context.commit('SET_LOADING_STATUS', 'loading');
            }, 2000)
        },
        tokenUpdate(context){
            setTimeout(function(){
                context.commit('SET_TOKEN', 'UPDATEDTOKEN');
            }, 2000)
        }

    },
    getters: {
        takeLoading(state){
            return state.loadingStatus
        },
        takeToken(state){
            return state.token
        }
    }
})