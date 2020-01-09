<template>
  <span>
    <v-container
      fluid
      justify-space-around
      style="padding:6px 0"
    >
      <v-layout>
        <v-flex>
          <app-sysmenu />
        </v-flex>
        <v-flex xs12>
          <router-view />
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>
<script>
import sysmenu from '@/components/static/sysmenu.vue';

export default {
    components: {
        'app-sysmenu': sysmenu
    },
    data: () => ({

    }),
    computed: {

    }
};
</script>

