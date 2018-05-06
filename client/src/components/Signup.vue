<template>
	<v-container>
        <v-layout>
            <v-flex xs12 md6 offset-md3>
                <v-card>
                    <v-toolbar dense flat>
                        <v-toolbar-title>Sign up</v-toolbar-title>
                    </v-toolbar>
                    <v-flex xs10 offset-xs1 class="text-xs-center">
                        <v-form>
                            <v-text-field
                                v-model='auth.userName'
                                label='username'
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model='auth.email'
                                label='e-mail'
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model='auth.password'
                                type='password'
                                label='password'
                                required
                            ></v-text-field>
                            <v-btn @click='submit'>Submit</v-btn>
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
                email: '',
                password: ''
            }
            
        }
    },
    methods: {
        submit() {
            axios.post('http://localhost:5000/signup', this.auth)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
};
</script>

<style lang='sass'>

</style>