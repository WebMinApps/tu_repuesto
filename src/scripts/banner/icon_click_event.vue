<template>
	<v-banner
		single-line
		@click:icon="alert"
	>
		<v-icon
			slot="icon"
			color="warning"
			size="36"
		>
			mdi-wifi-strength-alert-outline
		</v-icon>
		Unable to verify your Internet connection

		<template v-slot:actions>
			<v-btn
				color="primary"
				text
			>
				Connecting Settings
			</v-btn>
		</template>
	</v-banner>
</template>

<script>
/*
Icon click event
VBanner emits click:icon event on icon click, even with custom icon slot.
*/
export default {
  methods: {
    alert () {
      alert('Hello, World!');
    },
  },
};
</script>
