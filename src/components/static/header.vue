<template>
	<v-app-bar
		style="position:fixed; z-index:9999"
		elevation="6"
		absolute
		fixed
		color="#a0a0a0"
		:dark="dark"
		src="@/assets/img/repuestos.jpg"
	>
		<template v-slot:img="{props}">
			<v-img
				v-if="dark"
				v-bind="props"
				gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,.90)"
			/>
			<v-img
				v-else
				v-bind="props"
				gradient="to top right, rgba(100,100,100,.7), rgba(200,200,200,.8)"
			/>
		</template>
		<v-toolbar-title v-if="dark">
			<v-img
				class="d-none d-sm-flex"
				max-height="76"
				contain
				src="@/assets/img/logominidark.png"
			/>
			<v-img
				class="d-flex d-sm-none"
				max-height="76"
				contain
				src="@/assets/img/logo_min_dark.png"
			/>
		</v-toolbar-title>

		<v-toolbar-title v-else>
			<v-img
				class="d-none d-sm-flex"
				max-height="76"
				contain
				src="@/assets/img/logomini.png"
			/>
			<v-img
				class="d-flex d-sm-none"
				max-height="76"
				contain
				src="@/assets/img/logo_min_light.png"
			/>
		</v-toolbar-title>

		<v-spacer />
		<app-menu
			class="titlemargin"
			:notification="notifications"
			:login="login"
			:dark="dark"
		/>
	</v-app-bar>
</template>

<script>
import menu from '@/components/static/menu.vue';
export default {
  components: {
    'app-menu': menu
  },
  props: {
    login: {
      type: Boolean,
      required: false,
    },
    notifications: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    dark: {
      type: Boolean,
      required: false,
    }
  },
  data: () => ({})

};
</script>

<style>
</style>
