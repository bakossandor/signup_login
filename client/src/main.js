import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import store from './store'
import router from './router/index.js'

Vue.use(Vuetify)

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
