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
					:class="menu ? 'primary wt' : ''"
					:dark="dark"
					:color="menu ? 'gray' : ''"
					v-on="on"
				>
					<v-icon
						:color="unread ? 'warning' : ''"
						:class="unread ? 'animated infinite rubberBand delay-1s' : ''"
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
						<v-tabs-slider color="orange"></v-tabs-slider>
						<v-tab
							v-for="(item,i) in notificationoptions"
							:key="i"
							:href="`#${item}`"
						>
							<v-icon left>{{$t('notifications.' + item + '.icon')}}</v-icon>
							<span class="d-none d-lg-flex">{{$t('notifications.' + item + '.item')}}</span>
						</v-tab>

						<v-tab-item
							v-for="(item,i) in notificationoptions"
							:key="i"
							:value="`${item}`"
						>
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
					>{{$t('notifications.allread')}}</v-btn>
					<v-spacer></v-spacer>
					<v-btn
						class="lowercaseclass"
						text
						x-small
					>{{$t('notifications.showall')}}</v-btn>
					<v-spacer></v-spacer>

				</v-card-actions>
			</v-card>
		</v-menu>
		<app-alt
			v-model="nmsg"
			min="0"
			max="1"
			:interval="interval"
		></app-alt>
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
    nmsg: 0,
    menu: false,
    tab: 'recent',
    unread: true,
    interval: '6000'
  }),
  computed: {
    notificationoptions () {
      return ['recent', 'messages', 'responses', 'activity'];
    },
    recents () {
      return [];
    },
    messages () {
      return [];
    },
  },
  watch: {
    nmsg () {
      this.loadmessages();
    },
  },
  created () {
  },
  methods: {
    loadmessages () {
      // eslint-disable-next-line no-console
      console.log('load messages');
    }
  }
};
</script>

<style>
.lowercaseclass {
	text-transform: capitalize !important;
}

.wt {
	color: white !important;
}
</style>



