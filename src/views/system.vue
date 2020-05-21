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
  computed: {
    lang () {
      return this.$i18n.locale;
    },
    user () {
      return this.$store.getters.user_g_user;
    }
  },
  watch: {
    user (value) {
      if (!value.ID) {
        this.$router.push('/' + this.lang + '/home');
      }
    }
  },
  created () {
    this.$store.dispatch('admin_a_users');
    if (!this.user.ID) {
      this.$router.push('/' + this.lang + '/home');
    }
  }, methods: {
    userlevel () {
      return 5;
    }
  }
};
</script>

