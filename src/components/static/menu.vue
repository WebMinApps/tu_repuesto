<template>
	<span>
		<v-toolbar-items
			:dark="dark"
			app
		>
			<template v-if="notificationsbtn">
				<app-notifications
					v-if="login"
					:notification="notification"
					:dark="dark"
				></app-notifications>
			</template>
			<template v-if="$vuetify.breakpoint.smAndUp">
				<v-btn
					:to="`/${$i18n.locale}/home`"
					text
					class="text--capital"
				>
					<v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-home</v-icon> <span class="d-none d-md-flex">{{$t('mainmenu.home')}}</span>
				</v-btn>
				<template v-if="login">
					<v-btn
						:to="`/${$i18n.locale}/system/dashboard`"
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
						<v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-logout</v-icon> <span class="d-none d-md-flex">{{$t('mainmenu.logout')}}</span>
					</v-btn>
				</template>
				<template v-else>
					<v-btn
						:to="`/${$i18n.locale}/signin`"
						text
						class="text--capital"
					>
						<v-icon :left="!$vuetify.breakpoint.mdAndUp">mdi-login</v-icon> <span class="d-none d-md-flex">{{$t('mainmenu.signin')}}</span>
					</v-btn>
					<v-btn
						:to="`/${$i18n.locale}/signup`"
						text
						class="text--capital"
					>
						<v-icon :left="!$vuetify.breakpoint.mdAndUp">mdi-account-check</v-icon> <span class="d-none d-md-flex">{{$t('mainmenu.signup')}}</span>
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
					<v-list :dark="dark">
						<v-list-item :to="`/${$i18n.locale}/home`">
							<v-list-item-avatar>
								<v-icon>mdi-home</v-icon>
							</v-list-item-avatar>
							<v-list-item-title>{{$t('mainmenu.home')}}</v-list-item-title>
						</v-list-item>
						<template v-if="login">
							<v-list-item to="/system">
								<v-list-item-avatar>
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
								</v-list-item-avatar>
								<v-list-item-title>{{user.name}}</v-list-item-title>
							</v-list-item>
							<v-list-item @click="logout">
								<v-list-item-avatar>
									<v-icon>mdi-logout</v-icon>
								</v-list-item-avatar>
								<v-list-item-title>logout</v-list-item-title>
							</v-list-item>
						</template>
						<template v-else>
							<v-list-item :to="`/${$i18n.locale}/signin`">
								<v-list-item-avatar>
									<v-icon>mdi-login</v-icon>
								</v-list-item-avatar>
								<v-list-item-title>{{$t('mainmenu.signin')}}</v-list-item-title>
							</v-list-item>
							<v-list-item :to="`/${$i18n.locale}/signup`">
								<v-list-item-avatar>
									<v-icon right>mdi-account-check</v-icon>
								</v-list-item-avatar>
								<v-list-item-title>{{$t('mainmenu.signup')}}</v-list-item-title>
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
  data: () => ({
    pic: 0
  }),
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
