<template>
	<v-container>
		<v-layout
			full-width
			style="width:100%"
		>
			<app-panel :loading="loading">
				<template slot="title">
					<v-icon
						v-if="icon"
						left
					>{{icon}}</v-icon> {{title}}
				</template>
				<template slot="buttons">
					<slot name="buttons" />
				</template>
				<slot></slot>
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
    },
    loading: {
      required: false,
      type: Boolean
    }
  }
};
</script>

<style>
</style>
