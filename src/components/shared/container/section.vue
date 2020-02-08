<template>
	<v-container>
		<v-layout>
			<app-panel>
				<template slot="title">
					<v-icon
						v-if="icon"
						left
					>{{icon}}</v-icon> {{title}}
				</template>
				<template slot="buttons">
					<slot name="buttons"></slot>
				</template>
				<v-card-text>
					<slot></slot>
				</v-card-text>
			</app-panel>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
      default: 'Section'
    },
    icon: {
      required: false,
      type: String,
      default: ''
    }
  }
};
</script>

<style>
</style>
