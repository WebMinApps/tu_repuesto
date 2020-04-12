<template>
	<app-section
		icon="mdi-view-dashboard"
		title="Resumen"
	>
		<v-btn @click="doaction">Action</v-btn>&nbsp;
		<app-tooltip
			bottom
			tooltip="Abrir ventana"
		>
			<app-dialog
				persistent
				divide
				width="800"
			>
				<template slot="title">
					Ventana 1
				</template>
				<template slot="activator">
					<v-icon>mdi-home</v-icon>
				</template>
				<p align="justify">
					<app-input-ask
						v-model="ask"
						:dark="darkness"
					/>
				</p>
				<template slot="actions">
					<v-flex>
						<v-btn
							color="primary"
							@click="emitClose"
						>
							Close
						</v-btn>
						<v-btn color="success">
							OK
						</v-btn>
					</v-flex>
				</template>
			</app-dialog>
		</app-tooltip>
	</app-section>

</template>

<script>
import ask_input from '@/components/shared/input/ask.vue';
export default {
  components: {
    'app-input-ask': ask_input

  },
  data: () => ({
    ask: {
      ID: '',
      brand: '',
      model: '',
      part: '',
      spart: '',
      image: []
    }
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  methods: {
    emitClose () {
      this.$emit('close', event);
    },
    demofactory () {
      this.$store.dispatch('user_a_login');
    },
    doaction () {
      this.$store.dispatch('user_a_login');
    }
  }

};
</script>

<style>
</style>
