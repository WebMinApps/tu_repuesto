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
									@click="sendAsk"
								>
									<v-icon left>mdi-search-web</v-icon>Consultar
								</v-btn>
							</center>
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
      brand: '',
      model: '',
      part: '',
      spart: '',
      year: '',
      details: '',
      image: []
    },
    parallax: false
  }),
  computed: {
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
    sendAsk () {
      alert('Enviado');
    }
  }
};
</script>
