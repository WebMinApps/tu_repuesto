<template>
	<span>
		<v-list>
			<app-list-item></app-list-item>
		</v-list>
	</span>
</template>

<script>
import list from '@/components/static/notifications/notification_list_item.vue';

export default {
  components: {
    'app-list-item': list
  }
};
</script>

<style>
</style>
