import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import router from "./router/index"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: localStorage.getItem("token") || null,
        userName: localStorage.getItem("userName") || null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userName = userData.userName;
            console.log("userName: ", state.userName)
        }
    },
    actions: {
        signup({commit}, authData) {
            axios.post('http://localhost:5000/signup', authData)
            .then(res => {

                    router.push("/login")
                
            })
            .catch(err => {
                console.log(err)
            })
        },
        login({commit}, authData) {
            axios.post('http://localhost:5000/login', authData)
            .then(res => {
                commit("authUser", {
                    token: res.data.token,
                    userName: res.data.user
                });
                const tokenExp = new Date(1000 * JSON.parse(atob(res.data.token.split('.')[1])).exp)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("tokenExp", tokenExp);
                localStorage.setItem("usernName", JSON.parse(atob(res.data.token.split('.')[1])).data)
                router.push("/user")
            })
            .catch(err => {
                console.log(err)
            })
        },
        logout({commit}) {
            commit("authUser", {
                token: null,
                userName: null
            });
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExp");
            router.push("/login")
        },
    },

    

    getters: {
        isAuthenticated(state) {
            return state.idToken !== null
        }   
    }
})