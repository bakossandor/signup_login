import Signup from '../components/Signup'
import Login from '../components/Login'
import User from '../components/User'
import store from '../store'

export const routes = [
	{path: '/signup', component: Signup, name: "signup"},
	{path: '/login', component: Login, name: "login"},
	{
		path: '/user', 
		component: User, 
		name: "user",
		beforeEnter(to, from, next) {
			if (store.state.idToken) {
				next()
			} else {
				next("/login")
			}
		}
	},
	{path: '*', redirect: {name : "login"}}
]