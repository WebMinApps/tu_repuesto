<template>
  <v-app dark>
    <app-bar dark></app-bar>
    <v-sheet
      id="bodycontent"
      class="overflow-y-auto"
    >
      <v-container style="height: 7000px;"></v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import AppBar from '@/components/shared/static/appbar.vue'

export default {
  name: 'App',
  components: {
    'app-bar': AppBar
  },
  data: () => ({
    //
  }),
  computed () {

  }
}
</script>
