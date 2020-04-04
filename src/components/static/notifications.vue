<template>
	<span>
		<v-menu
			v-model="menu"
			:close-on-content-click="false"
			:nudge-width="180"
			offset-y
			left
		>
			<template v-slot:activator="{on}">
				<v-btn
					height="100%"
					tile
					text
					:dark="dark"
					v-on="on"
				>
					<v-icon
						:color="unread ? 'primary' : ''"
						:class="unread ? 'animated infinite wobble  delay-1s' : ''"
					>mdi-bell</v-icon>
				</v-btn>
			</template>

			<v-card :dark="dark">
				<span>
					<v-tabs
						v-model="tab"
						background-color="#970202"
						dark
					>
						<v-tabs-slider color="white"></v-tabs-slider>

						<v-tab
							v-for="(item,i) in items"
							:key="i"
							:href="`#${item.text}`"
						>
							<v-icon left>{{item.icon}}</v-icon>
							<span class="d-none d-lg-flex">{{item.text }}</span>
						</v-tab>
						<v-tab-item :value="'Recientes'">
							<v-card
								:dark="dark"
								flat
								tile
							>
								<app-notification-list></app-notification-list>
							</v-card>
						</v-tab-item>
						<v-tab-item :value="'Mensajes'">
							<v-card
								:dark="dark"
								flat
								tile
							>
								<app-notification-list></app-notification-list>
							</v-card>
						</v-tab-item>
						<v-tab-item :value="'Respuestas'">
							<v-card
								:dark="dark"
								flat
								tile
							>
								<app-notification-list></app-notification-list>
							</v-card>
						</v-tab-item>
						<v-tab-item :value="'Actividad'">
							<v-card
								:dark="dark"
								flat
								tile
							>
								<app-notification-list></app-notification-list>
							</v-card>
						</v-tab-item>
					</v-tabs>
				</span>

				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						class="lowercaseclass"
						text
						x-small
					>Marcar todo como leido</v-btn>
					<v-spacer></v-spacer>
					<v-btn
						class="lowercaseclass"
						text
						x-small
					>Mostrar Todo</v-btn>
					<v-spacer></v-spacer>

				</v-card-actions>
			</v-card>
		</v-menu>
	</span>
</template>

<script>
import notification_list from '@/components/static/notifications/notifications_list.vue';

export default {
  components: { 'app-notification-list': notification_list },
  props: {
    notification: {
      type: Array,
      required: true,
      default: () => ([])
    },
    dark: {
      type: Boolean,
      required: false,
    }
  },
  data: () => ({
    items: [
      { text: 'Recientes', icon: 'mdi-av-timer', color: '' },
      { text: 'Mensajes', icon: 'mdi-android-messages', color: '' },
      { text: 'Respuestas', icon: 'mdi-comment-check', color: '' },
      { text: 'Actividad', icon: 'mdi-account', color: '' }
    ],
    menu: false,
    tab: 'Recientes',
    text: 'hola',
    unread: true
  }),
  computed: {

  },
  watch: {},
  methods: {}
};
</script>

<style>
.lowercaseclass {
	text-transform: capitalize !important;
}
</style>



