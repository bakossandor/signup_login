<template>
	<v-container>
        <v-layout>
            <v-flex xs12 md8 offset-md2>
				<v-data-table
					:headers="headers"
					:items="users"
					class="elevation-1"
				>
					<template slot="items" slot-scope="props">
						<td>{{ props.item.userName }}</td>
						<td>{{ props.item.email }}</td>
					</template>
				</v-data-table>
            </v-flex>
        </v-layout>
	</v-container>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			headers: [
          		{ text: 'username', value: 'userName'},
				{ text: 'e-mail', value: 'email' },
			],
			users: [],
		}
	},
	created() {
		axios.get('http://localhost:5000/users')
            .then(res => {
				this.users = res.data
                console.log(res.data)
            })
	}
}
</script>

<style lang="sass">

</style>