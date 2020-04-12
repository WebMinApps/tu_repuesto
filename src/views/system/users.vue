<template>
	<app-section
		icon="mdi-account-group"
		title="Usuarios"
		:loading="loading"
	>
		<template slot="buttons">
			<v-btn
				icon
				@click="loadusers"
			>
				<v-icon>mdi-refresh</v-icon>
			</v-btn>
			<!-- Ventana de dialogo de usuario -->
			<app-dialog
				v-model="dialog"
				noratio
				persistent
				icon
				width="800"
			>
				<template slot="title">
					<v-icon left>mdi-account</v-icon> Usuario
				</template>
				<template slot="activator">
					<v-icon>mdi-account-plus</v-icon>
				</template>
				<v-card-text>
					<v-container>
						<v-layout>
							<app-user-form></app-user-form>
						</v-layout>
					</v-container>
				</v-card-text>
			</app-dialog>
		</template>

		<app-users-list
			v-model="selected"
			:headers="headers"
			:items="users"
			key-item="doc"
			:dense="dense"
		></app-users-list>
	</app-section>
</template>

<script>
import headers from '@/lib/table.headers.js';
import userform from '@/components/shared/input/register_user_data.vue';

export default {
  components: {
    'app-user-form': userform
  },
  data: () => ({
    user: {
      'ID': '100000000000000000000000000001',
      'email': 'admin@turepuesto.com',
      'name': 'Admin',
      'last': 'System',
      'doc': '00000000',
      'doctype': 'C',
      'nac': 'V',
      'phone': '00000000001',
      'level': '5',
      'birth': '0000-00-00',
      'created': '2019-07-19 04:03:03',
      'active': '1',
      'verified': '1',
      'image': 'images/storefiles/users/100000000000000000000000000001.png'
    },
    selected: [],
    dense: true,
    dialog: false
  }),
  computed: {
    loading () {
      return this.$store.getters.ui_g_loading;
    },
    darkness () {
      return this.$store.getters.ui_g_dark;
    },
    headers () {
      return headers.users;
    },
    users () {
      return this.$store.getters.admin_g_users;
    }
  },
  watch: {

  },
  created () {

  },
  methods: {
    loadusers () {
      this.$store.dispatch('admin_a_users');
    }
  }
};

</script>

<style>
</style>
