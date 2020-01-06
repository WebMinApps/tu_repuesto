<template>
  <span>
    <v-toolbar-items :dark="dark">
      <v-menu
        v-if="login"
        offset-y
        left
        :dark="dark"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            :dark="dark"
            v-on="on"
          >
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/">
            <v-list-item-avatar>
              <v-icon>mdi-home</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>Notificaciones</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <template v-if="$vuetify.breakpoint.smAndUp">

        <v-btn
          to="/"
          text
          class="text--capital"
        >
          <v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-home</v-icon> <span class="d-none d-md-flex">Inicio</span>
        </v-btn>

        <template v-if="login">
          <v-btn
            to="/system"
            text
            class="text--capital"
          >
            <v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-monitor-dashboard</v-icon> <span class="d-none d-md-flex">Sistema</span>
          </v-btn>
          <v-btn
            text
            class="text--capital"
          >
            <v-icon :left="$vuetify.breakpoint.mdAndUp">mdi-logout</v-icon> <span class="d-none d-md-flex">Salir</span>
          </v-btn>
        </template>
        <template v-else>
          <v-btn
            to="/signin"
            text
            class="text--capital"
          >
            <v-icon :left="!$vuetify.breakpoint.mdAndUp">mdi-login</v-icon> <span class="d-none d-md-flex">Ingresa</span>
          </v-btn>
          <v-btn
            to="/signup"
            text
            class="text--capital"
          >
            <v-icon :left="!$vuetify.breakpoint.mdAndUp">mdi-account-check</v-icon> <span class="d-none d-md-flex">Registrate</span>
          </v-btn>
        </template>
      </template>
      <template v-else>
        <v-menu
          offset-y
          left
          :dark="dark"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              :dark="dark"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/">
              <v-list-item-avatar>
                <v-icon>mdi-home</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
            <template v-if="login">
              <v-list-item to="/system">
                <v-list-item-avatar>
                  <v-icon>mdi-monitor-dashboard</v-icon>
                </v-list-item-avatar>
                <v-list-item-title>Sistema</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-avatar>
                <v-list-item-title>Salir</v-list-item-title>
              </v-list-item>
            </template>
            <template v-else>
              <v-list-item to="/signin">
                <v-list-item-avatar>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-avatar>
                <v-list-item-title>Ingresa</v-list-item-title>
              </v-list-item>
              <v-list-item to="/signup">
                <v-list-item-avatar>
                  <v-icon right>mdi-account-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-title>Registrate</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar-items>
  </span>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            required: false,
            default: false
        },
        login: {
            type: Boolean,
            required: false,
            default: false
        }
    }

};
</script>

<style>
</style>
