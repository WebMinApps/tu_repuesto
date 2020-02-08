<template>
	<span>
		<v-snackbar
			v-model="snackbar"
			:timeout="message.timeout"
			:color="message.type"
			@input="notify"
		>
			<h2 v-html="message.text"></h2>
			<v-btn
				icon
				@click="hidesnackbar"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</v-snackbar>
	</span>
</template>

<script>
export default {
  props: {},
  data: () => ({
    snackbar: false,
  }),
  computed: {
    message () {
      return this.$store.getters.ui_g_message;
    }
  },
  watch: {
    message (m) {
      if (m.text != '') {
        this.snackbar = true;
      }
    }
  },
  created () {
  },
  methods: {
    showsnackbar () {
      this.snackbar = true;
    },
    hidesnackbar () {
      this.$store.dispatch('ui_a_message', false);
      this.snackbar = false;
    },
    notify () {
      this.$store.dispatch('ui_a_message', false);
    }

  }
};
</script>
