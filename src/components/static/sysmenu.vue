<template>
	<v-navigation-drawer
		v-model="drawer"
		:dark="darkness"
		:permanent="permanent"
		:mini-variant="mini"
		:clipped="clip"
		:fixed="fixed"
		width="180"
		dense
		class="fill-height"
	>
		<v-toolbar
			v-if="!mini"
			dense
		>
			<v-toolbar-title>
				<span v-if="!mini">Username</span>
			</v-toolbar-title>
		</v-toolbar>
		<v-list>

			<!-- Menu Mini -->
			<template v-for="m in menu">
				<app-tooltip
					v-if="mini"
					:key="'tooltip' + m.name"
					:value="mini"
					right
					:tooltip="`${$t(m.name)}`"
				>
					<v-list-item
						:key="m.name"
						:to="`/${$i18n.locale}${m.url}`"
					>
						<v-list-item-avatar>
							<v-icon v-text="m.icon" />
						</v-list-item-avatar>
						<v-list-item-title v-text="`${$t(m.name)}`" />
					</v-list-item>
				</app-tooltip>
				<!-- Fin Menu Mini -->

				<!-- Menu Normal -->
				<v-list-item
					v-else
					:key="m.name"
					:to="`/${$i18n.locale}${m.url}`"
				>
					<v-list-item-avatar>
						<v-icon v-text="m.icon" />
					</v-list-item-avatar>
					<v-list-item-title v-text="`${$t(m.name)}`" />
				</v-list-item>
				<!-- Fin Menu Normal -->
			</template>
			<v-list-item @click="mini = !mini">
				<v-list-item-title>
					<center>
						<v-icon>mdi-chevron-{{ mini ? 'right' : 'left' }}</v-icon>
					</center>
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    permanent: true,
    mini: false,
    clip: true,
    fixed: false,
    menu: [
      {
        name: 'sysmenu.dashboard',
        icon: 'mdi-view-dashboard',
        url: '/system/dashboard'
      },
      {
        name: 'sysmenu.users',
        icon: 'mdi-account-group',
        url: '/system/users'
      }
    ]
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  watch: {
    '$vuetify.breakpoint.smAndDown' () {
      this.mini = this.$vuetify.breakpoint.smAndDown;
    }
  },
  created () {
    this.mini = this.$vuetify.breakpoint.smAndDown;
  },
  methods: {
    changetheme () {

    }
  }

};
</script>

<style>
</style>
