<template>
	<v-overlay :value="overlay">
		<v-progress-circular
			indeterminate
			size="64"
		></v-progress-circular>
	</v-overlay>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
  }),
  computed:{
    
  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false;
      }, 3000);
    },
  },
};
</script>
