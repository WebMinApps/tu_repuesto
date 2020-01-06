<template>
  <v-app dark>
    <app-header
      :dark="darkness"
      :notifications="notifications"
      :login="login"
    ></app-header>
    <div class="titlemargin"></div>
    <div :class="darkness?'dark-bg':'light-bg'">
      <router-view tag="div"></router-view>
    </div>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import header from '@/components/static/header';
import footer from '@/components/static/footer';


export default {
  data: () => ({}),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    },
    login () {
      return true;
    },
    notifications () {
      let notifications = [
        {
          type: 1,
          stype: 2,
        }
      ];
      return notifications;
    }
  }, components: {
    'app-header': header,
    'app-footer': footer,
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

