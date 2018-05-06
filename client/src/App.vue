<template>
	<v-app>
		<v-toolbar dense>
			<v-toolbar-title>Signup / Login example</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
			<v-btn flat small :to='{name: "login"}'>Login</v-btn>
			<v-btn flat small :to='{name: "signup"}'>Signup</v-btn>
			<v-btn flat small>Logout</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<router-view></router-view>
	</v-app>
</template>

<script>
export default {

}
</script>

<style lang="sass">

</style>
