<template>
	<v-btn icon>
		<!-- Icono de Boton -->
		<v-icon v-html="icon"></v-icon>
	</v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: 'mdi-heart'
    }
  }
};
</script>
