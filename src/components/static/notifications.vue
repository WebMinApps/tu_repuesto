<template>
	<span>
		<v-menu
			v-model="menu"
			:close-on-content-click="false"
			:nudge-width="300"
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
					<v-icon class="bounce">mdi-bell</v-icon>
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
							<span class="d-none d-xs-flex d-sm-flex lowercaseclass ">{{item.text }}</span>
							<v-icon v-if="icons">mdi-phone</v-icon>
						</v-tab>
						<v-tab-item :value="'Recientes'">
							<v-card
								:dark="dark"
								flat
								tile
							>
								<v-list>
									<!-- Entrada de item donde ubicar el FOR -->
									<v-list-item>
										<!-- Imagen -->
										<v-list-item-avatar>
											<img
												src="https://cdn.vuetifyjs.com/images/john.jpg"
												alt="John"
											>
										</v-list-item-avatar>
										<!-- Texto de Contenido-->

										<v-list-item-content>
											<!-- Titulo de entrada -->
											<v-list-item-title>John Leider</v-list-item-title>
											<!-- Subtitulo -->
											<v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
										</v-list-item-content>
										<!-- Acciones Botones laterales Se pueden repetir con FOR -->
										<v-list-item-action>
											<!-- 1er Boton -->
											<v-btn
												:class="fav ? 'red--text' : ''"
												icon
												@click="togglefav"
											>
												<!-- Icono de Boton -->
												<v-icon>mdi-heart</v-icon>
											</v-btn>
										</v-list-item-action>
										<!-- 2do Boton -->
										<v-list-item-action>
											<v-btn
												:class="fav ? 'red--text' : ''"
												icon
												@click="togglefav"
											>
												<v-icon>mdi-heart</v-icon>
											</v-btn>
										</v-list-item-action>

									</v-list-item>
								</v-list>
							</v-card>
						</v-tab-item>
						<v-tab-item :value="'Mensajes'">
							<v-card
								:dark="dark"
								flat
								tile
							>Mensajes</v-card>
						</v-tab-item>
						<v-tab-item :value="'Respuestas'">
							<v-card
								:dark="dark"
								flat
								tile
							>Respuestas</v-card>
						</v-tab-item>
						<v-tab-item :value="'Actividad'">
							<v-card
								:dark="dark"
								flat
								tile
							>Actividad</v-card>
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
						@click="closemenu"
					>Marcar todo como leido</v-btn>
					<v-spacer></v-spacer>
					<v-btn
						class="lowercaseclass"
						text
						x-small
						@click="closemenu"
					>Mostrar Todo</v-btn>
					<v-spacer></v-spacer>

				</v-card-actions>
			</v-card>
		</v-menu>
	</span>
</template>

<script>
//import notification_list from '@/components/static/notifications/notifications_list.vue';

export default {
  //components: { 'app-notification-list': notification_list},
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
    menu: true,
    text: 'hola',
    tabs: 1
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



