<template>
	<v-container
		fluid
		style="padding:5px 0;"
		full-width
		class="fill-height"
	>
		<v-layout style="width:100%">
			<v-flex>
				<app-sysmenu />
			</v-flex>
			<v-flex xs12>
				<router-view />
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
import sysmenu from '@/components/static/sysmenu.vue';
export default {
  components: {
    'app-sysmenu': sysmenu
  },
  created () {
    this.$store.dispatch('admin_a_users');
  },
  methods: {
    userlevel () {
      return 5;
    }
  }
};
</script>

