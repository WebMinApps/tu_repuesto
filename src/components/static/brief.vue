<template>
	<section>
		<v-layout
			column
			wrap
			class="my-5"
			align-center
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					class="text-center"
					cols="12"
				>
					<div class="text-xs-center">
						<h2 class="headline">
							La mejor forma de encontrar el repuesto que buscas...
						</h2>
						<span class="subheading">Consulta desde aqui!</span>
					</div>
				</v-col>
			</v-row>

			<v-flex xs12>
				<v-container grid-list-xl>
					<v-layout
						row
						wrap
						align-center
					>
						<v-flex
							xs12
							sm4
						>
							<v-card
								class="elevation-0 transparent"
								:dark="darkness"
							>
								<v-card-text>
									<center>
										<v-icon
											size="100"
											class="yellow--text"
											:class="darkness ? 'text--lighten-1' : 'text--darken-4'"
										>
											mdi-shield-search
										</v-icon>
									</center>
								</v-card-text>
								<v-card-title
									primary-title
									class="layout justify-center"
								>
									<div class="headline text-xs-center">
										Buscamos su repuesto
									</div>
								</v-card-title>
								<v-card-text>
									<p align="justify">
										Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
										Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
										Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
									</p>
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex
							xs12
							sm4
						>
							<v-card
								class="elevation-0 transparent"
								:dark="darkness"
							>
								<v-card-text class="text-xs-center">
									<center>
										<v-icon
											size="100"
											class="blue--text"
											:class="darkness ? 'text--lighten-1' : 'text--darken-4'"
										>
											mdi-human-handsup
										</v-icon>
									</center>
								</v-card-text>
								<v-card-title
									primary-title
									class="layout justify-center"
								>
									<div class="headline text-xs-center">
										<p align="justify">
											Nos movemos por usted
										</p>
									</div>
								</v-card-title>
								<v-card-text>
									<p align="justify">
										Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
										Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
										Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
									</p>
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex
							xs12
							sm4
						>
							<v-card
								class="elevation-0 transparent"
								:dark="darkness"
							>
								<v-card-text class="text-xs-center">
									<center>
										<v-icon
											size="100"
											class="red--text"
											:class="darkness ? 'text--lighten-1' : 'text--darken-4'"
										>
											mdi-shield-star
										</v-icon>
									</center>
								</v-card-text>
								<v-card-title
									primary-title
									class="layout justify-center"
								>
									<div class="headline text-xs-center">
										Rapidez y seguridad
									</div>
								</v-card-title>
								<v-card-text>
									<p align="justify">
										Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
										Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
										Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
									</p>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-flex>
		</v-layout>
	</section>
</template>

<script>
export default {
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  }
};
</script>

