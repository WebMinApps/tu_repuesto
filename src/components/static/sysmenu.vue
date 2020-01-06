<template>
  <v-navigation-drawer
    v-model="drawer"
    :dark="darkness"
    :permanent="permanent"
    :mini-variant="mini"
    :clipped="clip"
    :fixed="fixed"
    width="200"
    class="height-all"
  >
    <v-toolbar
      v-if="!mini"
      dense
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
            <v-icon v-text="m.icon" />
          </app-tooltip>
        </v-list-item-avatar>
        <v-list-item-title v-text="m.name" />
      </v-list-item>

      <v-list-item @click="mini = !mini">
        <v-list-item-title>
          <center>
            <v-icon>mdi-chevron-{{ mini ? 'right' : 'left' }}</v-icon>
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
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  watch: {
    '$vuetify.breakpoint.smAndDown' () {
      this.mini = this.$vuetify.breakpoint.smAndDown;
    }
  },
  created () {
    this.mini = this.$vuetify.breakpoint.smAndDown;
  },
  methods: {
    changetheme () {

    }
  }

};
</script>

<style>
</style>
