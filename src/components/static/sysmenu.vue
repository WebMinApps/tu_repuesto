<template>
  <v-navigation-drawer
    :dark="darkness"
    v-model="drawer"
    :permanent="permanent"
    :mini-variant="mini"
    :clipped="clip"
    :fixed="fixed"
    width="200"
    class="height-all"
  >
    <v-toolbar
      dense
      v-if="!mini"
    >
      <v-toolbar-title>
        <span v-if="!mini">Username</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="m in menu"
        :key="m.name"
        :to="m.url"
      >
        <v-list-item-avatar>
          <app-tooltip
            :value="mini"
            right
            :tooltip="m.name"
          >
            <v-icon v-text="m.icon"></v-icon>
          </app-tooltip>
        </v-list-item-avatar>
        <v-list-item-title v-text="m.name">
        </v-list-item-title>
      </v-list-item>

      <v-list-item @click="mini = !mini">
        <v-list-item-title>
          <center>
            <v-icon>mdi-chevron-{{mini?'right':'left'}}</v-icon>
          </center>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    permanent: true,
    mini: false,
    clip: true,
    fixed: false,
    menu: [
      {
        name: 'Resumen',
        icon: 'mdi-view-dashboard',
        url: '/system/dashboard'
      },
      {
        name: 'Usuarios',
        icon: 'mdi-account-group',
        url: '/system/users'
      }
    ]
  }),
  watch: {
    '$vuetify.breakpoint.smAndDown' () {
      this.mini = this.$vuetify.breakpoint.smAndDown;
    }
  },
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  methods: {
    changetheme () {

    }
  },
  created () {
    this.mini = this.$vuetify.breakpoint.smAndDown;
  }

};
</script>

<style>
</style>
