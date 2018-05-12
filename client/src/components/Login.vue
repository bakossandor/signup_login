<template>
	<v-container>
        <v-layout>
            <v-flex xs12 md6 offset-md3>
                <v-card>
					<v-toolbar dense flat>
						<v-toolbar-title>Login</v-toolbar-title>
					</v-toolbar>
					<v-flex xs10 offset-xs1 class="text-xs-center">
						<v-form>
							<v-text-field
								v-model="auth.userName"
								label="username"
								required
							></v-text-field>
							<v-text-field
								v-model='auth.password'
								type='password'
								label="password"
								required
							></v-text-field>
							<v-btn @click='login'>Login</v-btn>
						</v-form>
					</v-flex>
                </v-card>
            </v-flex>
        </v-layout>
	</v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
			auth: {
				userName: '',
				password: ''
			}
        }
	},
	methods: {
		login() {
			this.$store.dispatch('login', this.auth)
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
};
</script>

<style lang="sass">

</style>