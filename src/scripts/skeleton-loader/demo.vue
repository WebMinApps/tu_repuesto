<template>
	<v-sheet
		:color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
		class="px-3 pt-3 pb-3"
	>
		<v-skeleton-loader
			class="mx-auto"
			max-width="300"
			type="card"
		></v-skeleton-loader>
	</v-sheet>
</template>

<script>
/*

Skeleton loaders
The v-skeleton-loader component is a versatile tool that can fill many roles within a project. At its heart, the component provides an indication to the user that something is coming but not yet available. There are over 30 pre-defined options available that can be combined to make custom examples.

Usage
The v-skeleton-loader component provides a user with a visual indicator that content is coming / loading. This is better received than traditional full-screen loaders.

*/

export default {
  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: ['theme']
};
</script>
