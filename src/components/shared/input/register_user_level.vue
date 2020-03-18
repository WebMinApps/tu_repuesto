<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<center>
					<h1>¿Que deseas hacer?</h1><br><br>
				</center>
			</v-flex>
			<v-flex
				xs12
				sm6
				class="mb-5"
			>
				<center>
					<v-btn
						dark
						class="buy_gradient"
						style="height:200px;width:200px; border-radius:40px"
						@click="do_action(0)"
					>
						<v-container>
							<v-layout column>
								<v-flex xs12>
									<v-icon size="110">mdi-allergy</v-icon>
								</v-flex>
								<v-flex xs12>
									<h1>Comprar</h1>
								</v-flex>
							</v-layout>
						</v-container>
					</v-btn>
				</center><br><br>
			</v-flex>
			<v-flex
				xs12
				sm6
				class="mb-5"
			>
				<center>
					<v-btn
						style="height:200px;width:200px;border-radius:40px"
						dark
						class="sell_gradient"
						@click="do_action(1)"
					>
						<v-container>
							<v-layout column>
								<v-flex xs12>
									<v-icon size="110">mdi-currency-usd</v-icon>
								</v-flex>
								<v-flex xs12>
									<h1>Vender</h1>
								</v-flex>
							</v-layout>
						</v-container>
					</v-btn>
				</center><br><br>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: '0'
    }
  },
  data: () => ({
    level: null,
    selected: false
  }),
  computed: {

  },
  watch: {
    level () {
      this.$emit('input', this.level);
    }
  },
  methods: {
    do_action (who) {
      if (who === 1) {
        this.level = 1;
      } else {
        this.level = 0;
      }
    }
  }
};
</script>

<style>
.buy_gradient {
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a90329+0,8f0222+44,6d0019+100;Brown+Red+3D */
	background: #a90329; /* Old browsers */
	background: -moz-linear-gradient(
		top,
		#a90329 0%,
		#8f0222 44%,
		#6d0019 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		#a90329 0%,
		#8f0222 44%,
		#6d0019 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		#a90329 0%,
		#8f0222 44%,
		#6d0019 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=0 ); /* IE6-9
  */
}

.sell_gradient {
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#627d4d+0,1f3b08+100;Olive+3D */
	background: #627d4d; /* Old browsers */
	background: -moz-linear-gradient(
		top,
		#627d4d 0%,
		#1f3b08 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		#627d4d 0%,
		#1f3b08 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		#627d4d 0%,
		#1f3b08 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#627d4d', endColorstr='#1f3b08',GradientType=0 ); /* IE6-9 */
}
</style>
