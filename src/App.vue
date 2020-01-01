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
          gradient="to top right, rgba(50,50,50,1), rgba(0,0,0,.7)"
        ></v-img>
      </template>
      <v-toolbar-title>
        <v-img
          class="d-none d-sm-flex"
          contain
          src="@/assets/img/logominidark.png"
        ></v-img>
        <v-img
          class="d-flex d-sm-none"
          contain
          src="@/assets/img/logo_min_dark.png"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          to="/"
          text
          class="text--capital"
        >
          <v-icon>mdi-home</v-icon> Inicio
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
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        shrink: true
    })
};
</script>
