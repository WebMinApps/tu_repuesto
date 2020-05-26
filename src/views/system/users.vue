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
			width="800"
		>
			<app-panel height="600">
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
				<template>
					<v-card
						flat
						:dark="darkness"
						tile
					>
						<!-- Solo ver Datos de usuario -->
						<span v-if="action === 1">
							<app-show-user v-model="user"></app-show-user>
						</span>
						<!-- Ver Formuario de creacion o edicion de usuarios -->
						<v-tabs
							v-if="action === 0 || action === 2"
							v-model="tabs"
							dark
							grow
						>
							<v-tabs-slider color="orange"></v-tabs-slider>
							<!-- Tabs names -->
							<v-tab href="#user">Usuario</v-tab>
							<v-tab
								v-if="profileuser"
								href="#seller"
							>Tienda</v-tab>
							<v-tab
								v-if="profileuser"
								href="#profile"
							>Perfil</v-tab>
							<!-- Tabs Content -->

							<v-tab-item
								value="user"
								dark
							>

								<v-card-text>
									<v-container style="padding:10px 25px">
										<v-layout>
											<v-flex>
												<app-user-form
													v-model="user"
													showlevel
												/>
											</v-flex>
										</v-layout>
									</v-container>

							</v-tab-item>
							<v-tab-item
								value="seller"
								dark
							>

								<v-container style="padding:0 15px">
									<v-layout>
										<v-flex>
											<app-user-seller v-model="seller" />
										</v-flex>
									</v-layout>
								</v-container>
							</v-tab-item>
							<v-tab-item
								value="profile"
								dark
							>
								<v-tabs
									v-model="ptabs"
									grow
									:dark="darkness"
									style="background-color:#555"
								>
									<v-tab
										:dark="darkness"
										href="#brands"
									>Marcas</v-tab>
									<v-tab
										:dark="darkness"
										href="#parts"
									>Partes</v-tab>
									<v-tab-item
										:dark="darkness"
										value="brands"
									>
										<v-card
											tile
											:dark="darkness"
										>
											<v-card-text>
												<app-user-profile-brands v-model="profile"></app-user-profile-brands>
											</v-card-text>
										</v-card>
									</v-tab-item>
									<v-tab-item
										:dark="darkness"
										value="parts"
									>
										<v-card
											tile
											:dark="darkness"
										>

											<app-user-profile-parts v-model="profile" />

										</v-card>
									</v-tab-item>
								</v-tabs>

							</v-tab-item>

						</v-tabs>
						<!-- Eliminar usuario -->
						<span v-if="action === 3">
							<h2>Confirma que desea eliminar el siguiente Usuario?</h2>
							<br><br>
							{{user.name}} {{user.last}}<br>
							{{user.email}}
						</span>

						<v-card-actions>
							<v-btn>No</v-btn>
							<v-btn>SI</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</app-panel>
		</v-dialog>
		<v-data-table
			:headers="headers"
			:items="users"
			class="elevation-1"
		>
			<template v-slot:item.image="{item}">
				<v-avatar
					color="white"
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
			<template v-slot:item.level="{item}">
				{{usertypes[item.level]}}
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
import common from '@/lib/common.js';
import headers from '@/lib/table.headers.js';
import userform from '@/components/shared/input/register_user_data.vue';
import userseller from '@/components/shared/input/register_user_seller.vue';
import userprofilebrands from '@/components/shared/input/register_user_brands.vue';
import userprofileparts from '@/components/shared/input/register_user_parts.vue';
import showuserdata from '@/components/shared/input/showuserdata.vue';

export default {
  components: {
    'app-show-user': showuserdata,
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
    ptabs: 'brands'
  }),
  computed: {
    profileuser () {
      return this.user.level === 0 ? false : this.user.level === 1 ? true : this.user.level === 2 ? true : this.user.level === 3 ? false : this.user.level === 4 ? false : this.user.level === 5 ? true : false;
    },
    usertypes () {
      return common.user_types;
    },
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
    'user.level' (value) {
      if (value === 0 || value === 3 || value === 4) {
        this.clearProfile();
        this.clearSeller();
      }
    }
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
      this.clearUser();
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
    },
    // Limpiar Formularios
    clearUser () {
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
    clearSeller () {
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
    clearProfile () {
      this.profile = [];
    }
  }
};

</script>

<style>
</style>
