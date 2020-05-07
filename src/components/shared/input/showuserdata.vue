<template>
	<span>
		{{value}}
	</span>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        user: ''
      })
    }
  }

};
</script>

<style>
</style>
