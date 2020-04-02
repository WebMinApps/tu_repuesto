<template>
	<span>
		<v-parallax
			dark
			src="@/assets/img/repuestos.jpg"
			:height="parallaxheight"
		>
			<v-container
				fluid
				:style="{'background-image': '@/assets/img/repuestos.jpg'}"
			>
				<v-layout row>
					<v-flex
						xs12
						md3
						:style="{order: p1order}"
					>
						<app-sponsor></app-sponsor>
					</v-flex>
					<v-flex
						xs12
						md6
						:style="{order: askformorder}"
					>
						<div :class="darkness ? 'ask_bg_dark' : 'ask_bg_light'">
							<form @submit.prevent="submit">
								<center>
									<h2 :style="{color: darkness ? '#eee' : '#555'}">Encuentra el Repuesto que buscas.</h2>
								</center>
								<app-input-ask
									v-model="ask"
									showicons
									:dark="darkness"
								/>
								<center>
									<v-btn
										:loading="loading"
										:disabled="valid"
										class="primary"
										type="submit"
									>
										<v-icon left>mdi-comment-search</v-icon>Consultar
									</v-btn>
								</center>
							</form>
						</div>
					</v-flex>
					<v-flex
						xs12
						md3
						:style="{order: p2order}"
					>
						<app-sponsor></app-sponsor>
					</v-flex>
				</v-layout>
			</v-container>
		</v-parallax>
		<!-- Cuadro de dialogo para no registrados -->
		<v-dialog
			v-model="intrologin"
			width="500"
		>
			<v-card :dark="darkness">
				<v-card-title
					:class="!darkness  ? 'headline grey lighten-2' : 'headline grey darken-2'"
					primary-title
				>
					<span :style="darkness  ? 'color:white' : ''">Aun no estas registrado?</span>
				</v-card-title>
				<v-card-text>
					<div style="margin:10px">
						<center>
							<img
								v-if="darkness"
								src="@/assets/img/logominidark.png"
								class="img-responsive"
							/>
							<img
								v-else
								src="@/assets/img/logomini.png"
								class="img-responsive"
							/>
							<br />
							<img
								src="@/assets/img/gracias.png"
								class="img-responsive"
							/>
						</center>
					</div>
					<center>Para poder realizar consultas, debes registrarte o ingresar al sitio.</center>
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="primary"
						@click="tosignin"
					>
						<v-icon left>mdi-login</v-icon>Ingresar
					</v-btn>
					<div class="mx-4">o</div>
					<v-btn
						color="success"
						text-md-left
						@click="tosignup"
					>
						<v-icon left>mdi-account-check</v-icon>Registrate
					</v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!-- Cuadro de dialogo para confirmacion de envio de Pregunta -->
		<v-dialog
			v-model="asksended"
			width="500"
		>
			<v-card :dark="darkness">
				<v-card-title
					:class="darkness ? 'headline grey darken-2' : 'headline grey lighten-2'"
					primary-title
				>
					<span :style="darkness ? 'color:white' : ''">Pregunta enviada</span>
				</v-card-title>
				<v-card-text>
					<div style="margin:10px">
						<center>
							<img
								v-if="darkness"
								src="@/assets/img/logominidark.png"
								class="img-responsive"
							/>
							<img
								v-else
								src="@/assets/img/logomini.png"
								class="img-responsive"
							/>
							<br />
							<img
								src="@/assets/img/gracias.png"
								class="img-responsive"
							/>
						</center>
					</div>
					<center>
						<h2>Tu pregunta ha sido enviada</h2>
					</center>
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="success"
						@click="gotoasked"
					>
						<v-icon left>mdi-comment</v-icon>Ir a mis Preguntas
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</span>
</template>

<script>
import ask_input from '@/components/shared/input/ask.vue';
import sponsor from '@/components/shared/container/sponsor.vue';


export default {
  components: {
    'app-input-ask': ask_input,
    'app-sponsor': sponsor
  },
  data: () => ({
    ask: {
      ID: '',
      brand: '312c379dde93a2140d4ca950a676a6',
      model: '01fc23c961e17f0f7ac1e87d1387f3',
      part: 'a8f0202c26a8dc50c606621e4f1d53',
      spart: '37b4903df0cf43e45449c86a8e25a3',
      year: '2019',
      details: 'Detalles',
      image: []
    },
    asksended: false,
    intrologin: false,
    sendedWindow: false,
    parallax: true
  }),
  computed: {
    message () {
      return this.$store.getters.ui_g_message;
    },
    askformorder () {
      let o = 2;
      if (this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm') {
        o = 1;
      }
      return o;
    },
    p1order () {
      let o = 1;
      if (this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm') {
        o = 2;
      }
      return o;
    },
    p2order () {
      return 3;
    },
    login () {
      return this.user;
    },
    user () {
      return this.$store.getters.user_g_user;
    },
    valid () {
      return !this.ask.brand || !this.ask.model || !this.ask.year || !this.ask.part || !this.ask.details;
    },
    loading () {
      return this.$store.getters.ui_g_loading;
    },
    mediumormore () {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    parallaxheight () {
      let ph = 480;
      if (this.$vuetify.breakpoint.name == 'xs') {
        ph = 1580;
      } else if (this.$vuetify.breakpoint.name == 'sm') {
        ph = 1400;
      } else if (this.$vuetify.breakpoint.name == 'md') {
        ph = 500;
      }
      return ph;
    },
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  watch: {},
  methods: {
    tosignup () {
      this.$router.push('/signup');
    },
    tosignin () {
      this.$router.push('/signin');
    },
    gotoasked () {
      this.asksended = false;
      this.$router.push('/system/asked');
    },
    submit () {
      if (this.user.ID) {
        this.ask.userID = this.user.ID;
        this.$store.dispatch('ask_a_create', this.ask);
        let messagetype = this.message.type;
        if (messagetype == 'success') {
          this.asksended = true;
        } else {
          this.asksended = true;
        }
      } else {
        this.intrologin = true;
      }
    }
  }
};
</script>
