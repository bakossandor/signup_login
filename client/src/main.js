import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
