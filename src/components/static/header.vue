<template>
  <v-app-bar
    style="position:fixed"
    elevation="6"
    absolute
    fixed
    color="#a0a0a0"
    :dark="dark"
    src="@/assets/img/repuestos.jpg"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-if="dark"
        v-bind="props"
        gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,.90)"
      ></v-img>
      <v-img
        v-else
        v-bind="props"
        gradient="to top right, rgba(100,100,100,.7), rgba(200,200,200,.8)"
      ></v-img>
    </template>
    <v-toolbar-title v-if="dark">
      <v-img
        class="d-none d-sm-flex"
        max-height="76"
        contain
        src="@/assets/img/logominidark.png"
      ></v-img>
      <v-img
        class="d-flex d-sm-none"
        max-height="76"
        contain
        src="@/assets/img/logo_min_dark.png"
      ></v-img>
    </v-toolbar-title>

    <v-toolbar-title v-else>
      <v-img
        class="d-none d-sm-flex"
        max-height="76"
        contain
        src="@/assets/img/logomini.png"
      ></v-img>
      <v-img
        class="d-flex d-sm-none"
        max-height="76"
        contain
        src="@/assets/img/logo_min_light.png"
      ></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <app-menu
      class="titlemargin"
      :login="login"
    ></app-menu>

  </v-app-bar>

</template>

<script>
import menu from '@/components/static/menu';
export default {
  props: {
    login: {
      type: Boolean,
      required: false,
      default: false
    },
    notifications: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({}),
  components: {
    'app-menu': menu
  }

};
</script>

<style>
</style>
