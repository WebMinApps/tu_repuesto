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
			<v-btn
				icon
				@click="newuser"
			>
				<v-icon>mdi-account-plus</v-icon>
			</v-btn>
		</template>

		<v-dialog
			v-model="dialog"
			width="700"
		>
			<app-panel>
				<template slot="title">
					<v-icon left>mdi-account</v-icon>{{actionname}} Usuario
				</template>
				<template slot="buttons">
					<v-btn
						icon
						@click="closeDialog"
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</template>
				<v-layout>
					<v-tabs
						v-model="tabs"
						dark
						grow
					>
						<v-tabs-slider color="orange"></v-tabs-slider>

						<!-- Tabs names -->
						<v-tab href="#user">Usuario</v-tab>
						<v-tab href="#seller">Tienda</v-tab>
						<v-tab href="#profile">Perfil</v-tab>

						<!-- Tabs Content -->
						<v-tab-item
							value="user"
							dark
						>
							<v-card
								:dark="darkness"
								tile
							>
								<app-user-form v-model="user"></app-user-form>
							</v-card>
						</v-tab-item>
						<v-tab-item
							value="seller"
							dark
						>
							<v-card
								:dark="darkness"
								tile
							>
								<app-user-seller v-model="seller"></app-user-seller>
							</v-card>
						</v-tab-item>
						<v-tab-item
							value="profile"
							dark
						>
							<v-card
								:dark="darkness"
								tile
							>
								<v-tabs v-model="ptabs">
									<v-tab href="#brands">Marcas</v-tab>
									<v-tab href="#parts">Partes</v-tab>
									<v-tab-item value="brands">
										<v-card
											tile
											:dark="darkness"
										>
											<app-user-profile-brands v-model="profile"></app-user-profile-brands>
										</v-card>
									</v-tab-item>
									<v-tab-item value="partss">
										<v-card
											tile
											:dark="darkness"
										>
											<app-user-profile-parts v-model="profile"></app-user-profile-parts>
										</v-card>
									</v-tab-item>
								</v-tabs>

							</v-card>
						</v-tab-item>

					</v-tabs>
				</v-layout>
			</app-panel>

		</v-dialog>

		<v-data-table
			:headers="headers"
			:items="users"
			class="elevation-1"
		>
			<template v-slot:item.image="{item}">
				<v-avatar
					:color="'white'"
					style="border:1px solid #000 !important; margin:3px;"
				>
					<v-img
						v-if="item.image"
						:src="baseURL + item.image"
					></v-img>
					<v-img
						v-else
						dark
					>
						<v-icon style="color:black">mdi-image</v-icon>
					</v-img>
				</v-avatar>
			</template>
			<template v-slot:item.action="{item}">
				<v-btn
					icon
					@click="watchuser(item)"
				>
					<v-icon>mdi-eye</v-icon>
				</v-btn>
				<v-btn
					icon
					@click="edituser(item)"
				>
					<v-icon>mdi-pencil</v-icon>
				</v-btn>
				<v-btn
					icon
					@click="deluser(item)"
				>
					<v-icon>mdi-delete</v-icon>
				</v-btn>
			</template>
		</v-data-table>
	</app-section>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios';
import headers from '@/lib/table.headers.js';
import userform from '@/components/shared/input/register_user_data.vue';
import userseller from '@/components/shared/input/register_user_seller.vue';
import userprofilebrands from '@/components/shared/input/register_user_brands.vue';
import userprofileparts from '@/components/shared/input/register_user_parts.vue';

export default {
  components: {
    'app-user-form': userform,
    'app-user-seller': userseller,
    'app-user-profile-brands': userprofilebrands,
    'app-user-profile-parts': userprofileparts

  },
  data: () => ({
    user: {
      ID: null,
      email: '',
      pass: '',
      confirmpass: '',
      doc: '',
      doctype: '',
      nac: '',
      name: '',
      last: '',
      level: 0,
      phone: '',
      birth: '',
      created: '',
      active: '',
      verified: '',
      image: []
    },
    seller: {
      ID: '',
      name: '',
      image: [],
      rif: '',
      nac: '',
      phone: '',
      city: '',
      address: ''
    },
    profile: [],
    selected: [],
    action: 0,
    dense: true,
    dialog: false,
    tabs: 'user',
    ptab: 'brands'
  }),
  computed: {
    baseURL () {
      return axios.defaults.baseURL;
    },
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
    },
    actionname () {
      let act = 'Nuevo';
      if (this.action == 1) {
        act = 'Ver';
      } else if (this.action == 2) {
        act = 'Editar';
      }
      return act;
    }
  },
  watch: {

  },
  created () {

  },
  methods: {
    submit () {
      switch (this.action) {
      case 0: // New User

        break;
      case 1: // Watch user

        break;
      case 2: // Edit User

        break;
      case 3: // Delete User

        break;
      }
    },
    setUserData (user) {
      this.user = user;
      this.user.pass = '******';
      this.user.confirmpass = '******';
    },
    resetUser () {
      this.user = {
        ID: null,
        email: '',
        pass: '',
        confirmpass: '',
        doc: '',
        doctype: '',
        nac: '',
        name: '',
        last: '',
        level: 0,
        phone: '',
        birth: '',
        created: '',
        active: '',
        verified: '',
        image: []
      };
    },
    resetSeller () {
      this.seller = {
        ID: '',
        name: '',
        image: [],
        rif: '',
        nac: '',
        phone: '',
        city: '',
        address: ''
      };
    },
    resetProfile () {
      this.profile = [];
    },
    openDialog () {
      this.dialog = true;
    },
    closeDialog () {
      this.dialog = false;
    },
    loadusers () {
      this.$store.dispatch('admin_a_users');
    },
    newuser () {
      this.action = 0;
      this.resetUser();
      this.openDialog();
      console.log('New user');
    },
    watchuser (item) {
      this.action = 1;
      this.setUserData(item);
      this.openDialog();
      console.log('Watch: ' + item.ID);
    },
    edituser (item) {
      this.action = 2;
      this.setUserData(item);
      this.openDialog();
      console.log('Edit: ' + item.ID);
    },
    deluser (item) {
      this.action = 3;
      this.setUserData(item);
      this.openDialog();
      console.log('Delete: ' + item.ID);
    }
  }
};

</script>

<style>
</style>
