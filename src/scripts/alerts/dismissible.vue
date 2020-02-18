<template>
	<div>
		<v-alert
			v-model="alert"
			border="left"
			close-text="Close Alert"
			color="deep-purple accent-4"
			dark
			dismissible
		>
			Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
			Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
		</v-alert>
		<div class="text-center">
			<v-btn
				v-if="!alert"
				color="deep-purple accent-4"
				dark
				@click="showalert"
			>Reset</v-btn>
		</div>
	</div>
</template>

<script>
/*
Dismissible
The dismissible prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert. You can restore the alert by binding v-model and setting it to true. The close icon automatically has an aria-label applied that can be changed by modifying the close-label prop or changing close value in your locale. For more information on how to global modify your locale settings, navigate to the Internationalization page.
*/

export default {
  data () {
    return {
      alert: true
    };
  },
  methods: {
    showalert () {
      this.alert = true;
    }
  }
};
</script>
