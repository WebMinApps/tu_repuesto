<template>
	<span>
		<v-toolbar-items
			:dark="dark"
			app
		>
			<template v-if="notificationsbtn">
				<v-menu
					v-if="login"
					offset-y
					left
					:dark="dark"
				>
					<template v-slot:activator="{on}">
						<v-btn
							text
							:dark="dark"
							v-on="on"
						>
							<v-icon>mdi-bell</v-icon>
						</v-btn>
					</template>
					<v-list two-line>
						<template v-for="(item, index) in notification">
							<v-subheader
								v-if="item.header"
								:key="item.header"
								inset
							>
								{{ item.header }}
							</v-subheader>

							<v-divider
								v-else-if="item.divider"
								:key="index"
								inset
							></v-divider>

							<v-list-item
								v-else
								:key="item.title"
								ripple
							>
								<v-list-item-avatar>
									<img :src="item.avatar">
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title v-html="item.title"></v-list-item-title>
									<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-menu>
			</template>
			<template v-if="$vuetify.breakpoint.smAndUp">
				<v-btn
					to="/"
					text
					class="text--capital"
				>
					<v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-home</v-icon> <span class="d-none d-md-flex">Inicio</span>
				</v-btn>

				<template v-if="login">
					<v-btn
						to="/system"
						text
						class="text--capital"
					>
						<v-avatar
							size="50"
							color="#333"
						>
							<v-img
								v-if="user.image"
								class="ma-3"
								:src="baseURL + user.image"
							></v-img>
							<v-icon v-else>mdi-monitor-dashboard</v-icon>
						</v-avatar>
						<span class="d-none d-md-flex mx-2">{{user.name}}</span>
					</v-btn>
					<v-btn
						text
						class="text--capital"
						@click="logout"
					>
						<v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-logout</v-icon> <span class="d-none d-md-flex">Salir</span>
					</v-btn>
				</template>
				<template v-else>
					<v-btn
						to="/signin"
						text
						class="text--capital"
					>
						<v-icon :left="!$vuetify.breakpoint.mdAndUp">mdi-login</v-icon> <span class="d-none d-md-flex">Ingresa</span>
					</v-btn>
					<v-btn
						to="/signup"
						text
						class="text--capital"
					>
						<v-icon :left="!$vuetify.breakpoint.mdAndUp">mdi-account-check</v-icon> <span class="d-none d-md-flex">Registrate</span>
					</v-btn>
				</template>
			</template>
			<template v-else>
				<v-menu
					offset-y
					left
					:dark="dark"
				>
					<template v-slot:activator="{on}">
						<v-btn
							text
							:dark="dark"
							v-on="on"
						>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item to="/">
							<v-list-item-avatar>
								<v-icon>mdi-home</v-icon>
							</v-list-item-avatar>
							<v-list-item-title>Inicio</v-list-item-title>
						</v-list-item>
						<template v-if="login">
							<v-list-item to="/system">
								<v-list-item-avatar>
									<v-avatar>
										<v-icon>mdi-monitor-dashboard</v-icon>
									</v-avatar>
								</v-list-item-avatar>
								<v-list-item-title>{{user.name}}</v-list-item-title>
							</v-list-item>
							<v-list-item @click="logout">
								<v-list-item-avatar>
									<v-icon>mdi-logout</v-icon>
								</v-list-item-avatar>
								<v-list-item-title>Salir</v-list-item-title>
							</v-list-item>
						</template>
						<template v-else>
							<v-list-item to="/signin">
								<v-list-item-avatar>
									<v-icon>mdi-login</v-icon>
								</v-list-item-avatar>
								<v-list-item-title>Ingresa</v-list-item-title>
							</v-list-item>
							<v-list-item to="/signup">
								<v-list-item-avatar>
									<v-icon right>mdi-account-check</v-icon>
								</v-list-item-avatar>
								<v-list-item-title>Registrate</v-list-item-title>
							</v-list-item>
						</template>
					</v-list>
				</v-menu>
			</template>
		</v-toolbar-items>
	</span>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    dark: {
      type: Boolean,
      required: false,
    },
    login: {
      type: Boolean,
      required: false,
    },
    notification: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  computed: {
    baseURL () {
      return axios.defaults.baseURL;
    },
    notificationsbtn () {
      return this.$store.getters.ui_g_notificationsbtn;
    },
    user () {
      return this.$store.getters.user_g_user;
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user_a_logout');
    }
  }

};
</script>

<style>
</style>
