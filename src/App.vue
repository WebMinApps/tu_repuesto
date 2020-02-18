<template>
	<v-app dark>

		<app-header
			:dark="darkness"
			:notifications="notifications"
			:login="user.ID ? true : false"
		/>

		<div class="titlemargin" />

		<v-container
			:class="darkness ? 'dark-bg' : 'light-bg'"
			fluid
			style="margin:0;padding:0"
		>
			<router-view tag="div" />
		</v-container>
		<app-alert></app-alert>
		<div class="titlefooter" />
		<app-footer />
	</v-app>
</template>

<script>
/* eslint-disable no-console */

import header from '@/components/static/header';
import footer from '@/components/static/footer';

export default {	components: {
  'app-header': header,
  'app-footer': footer,
},
data: () => ({}),
computed: {
  user () {
    return this.$store.getters.user_g_user;
  },
  darkness () {
    return this.$store.getters.ui_g_dark;
  },
  notifications () {
    return [
      {
        avatar: 'https://picsum.photos/250/300?image=660',
        title: 'Meeting @ Noon',
        subtitle: '<span class=\'text--primary\'>Spike Lee</span> &mdash; I\'ll be in your neighborhood',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=821',
        title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
        subtitle: '<span class=\'text--primary\'>to Operations support</span> &mdash; Wish I could come.',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=783',
        title: 'Yes yes',
        subtitle: '<span class=\'text--primary\'>Bella</span> &mdash; Do you have Paris recommendations',
      },

      {
        avatar: 'https://picsum.photos/250/300?image=1006',
        title: 'Dinner tonight?',
        subtitle: '<span class=\'text--primary\'>LaToya</span> &mdash; Do you want to hang out?',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=146',
        title: 'So long',
        subtitle: '<span class=\'text--primary\'>Nancy</span> &mdash; Do you see what time it is?',
      },

      { divider: true },
      {
        avatar: 'https://picsum.photos/250/300?image=1008',
        title: 'Breakfast?',
        subtitle:
						'<span class=\'text--primary\'>LaToya</span> &mdash; Do you want to hang out?',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=839',
        title:
						'Winter Porridge <span class="grey--text text--lighten-1"></span>',
        subtitle:
						'<span class=\'text--primary\'>cc: Daniel</span> &mdash; Tell me more...',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=145',
        title: 'Oui oui',
        subtitle:
						'<span class=\'text--primary\'>Nancy</span> &mdash; Do you see what time it is?',
      },
    ];
  },

},
watch: {
  user (value) {
    if (value.ID) {
      if (this.$route.path == '/signin') {
        this.$router.push('/system');
      }
    } else {
      if (this.$route.matched[0].path == '/system') {
        this.$router.push('/');
      }
    }
  }
},
created () {
  if (this.user.ID) {
    if (this.$route.path == '/signin') {
      this.$router.push('/system');
    }
  }
}


};


/*
notification = [
  {
    item: String,
    action: Number, 0=custom, 1=created, 2=modify, 3=deleted, 4=paused, 5, cancelled
    user:String,
    details: String,
  }
]
*/

</script>

