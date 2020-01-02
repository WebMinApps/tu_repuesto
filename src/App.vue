<template>
  <v-app dark>
    <v-app-bar
      style="position:fixed"
      elevation="6"
      absolute
      color="#700000"
      dark
      src="@/assets/img/repuestos.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,.90)"
        ></v-img>
      </template>
      <v-toolbar-title>
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

      <v-spacer></v-spacer>
      <div style="width:30px"></div>
      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-btn
          to="/"
          text
          class="text--capital"
        >
          <v-icon left>mdi-home</v-icon> Inicio
        </v-btn>

        <v-btn
          to="/signin"
          text
          class="text--capital"
        >
          <v-icon left>mdi-login</v-icon> Ingresa
        </v-btn>

        <v-btn
          to="/signup"
          text
          class="text--capital"
        >

          <v-icon left>mdi-account-check</v-icon> Registrate
        </v-btn>
      </v-toolbar-items>
      <template v-else>

        <v-menu
          offset-y
          dark
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              color="primary"
              dark
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
          </v-list>
        </v-menu>
      </template>

    </v-app-bar>
    <router-view></router-view>
    <footer fixed>Piso</footer>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        shrink: true
    })
};
</script>
