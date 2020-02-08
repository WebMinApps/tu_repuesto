<template>
	<span>
		<v-btn
			:dark="darkness"
			:icon="icon"
			@click="openWindow"
			@close="closeWindow"
		>
			<slot name="activator" />
		</v-btn>
		<v-dialog
			v-model="dialog"
			:fullscreen="fullscreen"
			:width="width"
			:dark="darkness"
			:persistent="persistent"
			@close="closeWindow"
		>
			<app-panel :notitle="notitle">
				<v-btn
					v-if="notitle"
					:height="height"
					:width="width"
					text
					fab
					x-small
					absolute
					@click="closeWindow"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<template slot="title">
					<slot name="title" />
				</template>
				<template slot="buttons">
					<slot name="buttons" />
					<template v-if="togglefull">
						<app-tooltip
							bottom
							:tooltip="fullscreen ? 'Cerrar Pantalla Completa' : 'Pantalla Completa'"
						>
							<v-btn
								icon
								@click="toogleFullScreen"
							>
								<v-icon>
									mdi-fullscreen{{ fullscreen ? '-exit' : '' }}
								</v-icon>
							</v-btn>
						</app-tooltip>
					</template>
					<app-tooltip
						bottom
						tooltip="Cerrar"
					>
						<v-btn
							icon
							@click="closeWindow"
						>
							<v-icon>mdi-close</v-icon>
						</v-btn>
					</app-tooltip>
				</template>
				<v-card-text>
					<slot />
				</v-card-text>
				<v-divider />
				<v-card-actions>
					<slot name="actions" />
				</v-card-actions>
			</app-panel>
		</v-dialog>
	</span>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      required: false,
    },
    fullscreen: {
      required: false,
      type: Boolean,
    },
    persistent: {
      required: false,
      type: Boolean,
    },
    notitle: {
      required: false,
      type: Boolean,
    },
    togglefull: {
      required: false,
      type: Boolean,
    },
    height: {
      required: false,
      type: String,
      default: '300'
    },
    width: {
      required: false,
      type: String,
      default: '300'
    },
    divide: {
      required: false,
      type: Boolean,
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  methods: {
    openWindow () {
      this.dialog = true;
    },
    closeWindow () {
      this.dialog = false;
    },
    toogleFullScreen () {
      this.fullscreen = !this.fullscreen;
    }

  }
};
</script>

<style>
</style>
