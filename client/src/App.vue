<template>
	<v-app>
		<v-toolbar dense>
			<v-toolbar-title>Signup / Login example</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
			<v-btn v-if="!auth" flat small :to='{name: "login"}'>Login</v-btn>
			<v-btn v-if="!auth" flat small :to='{name: "signup"}'>Signup</v-btn>
			<v-btn v-if="auth" flat small @click="logout">Logout</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<router-view></router-view>
	</v-app>
</template>

<script>
export default {
	computed: {
		auth() {
			return this.$store.getters.isAuthenticated
		}
	},
	methods: {
		logout() {
			this.$store.dispatch("logout");
		}
	},
	created() {
		if (new Date(localStorage.getItem("tokenExp")) <= new Date()) {
			console.log("failed to auto log in")
		} else if (new Date(localStorage.getItem("tokenExp")) >= new Date()) {
			console.log("else")
			this.$router.push({path: "/user"})
        } else {
			
		}
	}
}
</script>

<style lang="sass">

</style>
