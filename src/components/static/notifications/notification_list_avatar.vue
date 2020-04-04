<template>
	<!-- Imagen -->
	<v-list-item-avatar>
		<img
			:src="src"
			:alt="alt"
		>
	</v-list-item-avatar>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: 'https://cdn.vuetifyjs.com/images/john.jpg'
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: () => ({}),
  computed: {
    baseURL () {
      return axios.defaults.baseURL;
    }
  }

};
</script>

<style>
</style>
