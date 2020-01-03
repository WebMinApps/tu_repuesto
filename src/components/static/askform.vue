<template>
  <v-parallax
    dark
    src="@/assets/img/repuestos.jpg"
    class="autoblur"
    height="300"
  >
    <v-layout>
      <v-flex
        xs12
        sm2
      >a</v-flex>
      <v-flex
        xs12
        sm8
      >b</v-flex>
      <v-flex
        xs12
        sm2
      >c</v-flex>
    </v-layout>

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
        <app-ask-form></app-ask-form>
      </v-col>
      <v-col cols="2">
        <app-pubmainask></app-pubmainask>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import publicontainer from '@/components/shared/container/publicontainer.vue';
import ask_form from '@/components/shared/forms/ask.vue';

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
        'app-pubmainask': publicontainer,
        'app-ask-form': ask_form
    }
};
</script>
