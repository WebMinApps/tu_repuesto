<template>
	<v-container
		id="input-usage"
		fluid
	>
		<v-row>
			<v-col cols="12">
				<v-input
					:messages="['Messages']"
					append-icon="close"
					prepend-icon="phone"
				>Default Slot</v-input>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
/*
Usage
v-input has 4 main areas. The prepended slot, the appended slot, the default slot, and messages. These make up the core logic shared between all form components.
*/

export default {
  data () {
    return {
      text: ''
    };
  },
  methods: {
    appendIconCallback () { },
    prependIconCallback () { }
  }
};
</script>

<style>
#input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
	border: 1px dashed rgba(0, 0, 0, 0.4);
}
</style>
