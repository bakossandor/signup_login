import Signup from './components/Signup'
import Login from './components/Login'
import User from './components/User'

export const routes = [
	{path: '/signup', component: Signup, name: "signup"},
	{path: '/login', component: Login, name: "login"},
	{path: '/user/:id', component: User, name: "user"},
	{path: '*', redirect: {name : "login"}}
]