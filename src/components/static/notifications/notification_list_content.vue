<template>
	<v-list-item-content>
		<!-- Titulo de entrada -->
		<v-list-item-title v-html="title"></v-list-item-title>
		<!-- Subtitulo -->
		<v-list-item-subtitle v-html="subtitle"></v-list-item-subtitle>
	</v-list-item-content>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    subtitle: {
      type: String,
      required: false,
      default: 'Subtitle'
    }
  }
};
</script>
