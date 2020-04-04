<template>
	<span>
		<v-tabs
			v-model="tab"
			dark
			align-with-title
		>
			<v-tabs-slider color="primary"></v-tabs-slider>
			<v-tab
				v-for="item in items"
				:key="item"
			>{{ item }}</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tab">
			<v-tab-item
				v-for="item in items"
				:key="item"
			>
				<v-card dark>
					<v-card-text v-text="text"></v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</span>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: ['Recientes', 'Mensajes', 'Actividad', 'Configuracion'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
};
</script>

<style>
</style>
