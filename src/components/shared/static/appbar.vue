<template>
  <v-app-bar
    absolute
    color="#000000"
    shrink-on-scroll
    dark
    fade-img-on-scroll
    scroll-target="body"
    src="@/assets/img/repuestos.jpg"
    scroll-threshold="500"
  >
    <template v-slot:img="{ props }">
      <v-img
        absolute
        v-bind="props"
        gradient="to top right, rgba(100,0,0,.7), rgba(0,0,0,1)"
      ></v-img>
    </template>
    <v-toolbar-title>
      <v-img src="@/assets/img/logominidark.png"></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      text
      to="/"
    >
      <v-icon left>mdi-home</v-icon>Inicio
    </v-btn>

    <v-btn
      text
      to="/register"
    >
      <v-icon left>mdi-heart</v-icon> Acceder
    </v-btn>

    <v-menu
      bottom
      left
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          color="yellow"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>ahh</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        collapseOnScroll: false
    })
};
</script>

<style></style>
