<template>

  <v-parallax
    dark
    src="@/assets/img/repuestos.jpg"
    class="autoblur"
    height="300"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="2">
        <app-pubmainask></app-pubmainask>
      </v-col>
      <v-col
        class="text-center"
        cols="8"
      >
        <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
      <v-col cols="2">
        <app-pubmainask></app-pubmainask>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import publicontainer from '@/components/shared/container/publicontainer.vue';

export default {
    data: () => ({
    }),
    computed: {
    },
    watch: {},
    methods: {
    },
    created () {
    },
    components: {
        'app-pubmainask': publicontainer
    }
};
</script>

<style>
.partmenu {
  position: relative;
  min-width: 20px !important;
  height: 48px;
  top: -6px;
  left: -25px;
}
</style>
