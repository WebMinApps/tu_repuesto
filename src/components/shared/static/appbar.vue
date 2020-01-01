<template
  ><span>
    <v-app-bar
      elevate-on-scroll
      fixed
      absolute
      color="#6A76AB"
      extended
      dark
      shrink-on-scroll
      fade-img-on-scroll
      scroll-target="body"
    >
      <template v-slot:img="{ props }">
        <v-img
          src="@/assets/img/repuestos.jpg"
          absolute
          v-bind="props"
          gradient="to top right, rgba(200,0,0,.7), rgba(0,0,0,1)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon color="yellow" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  data: () => ({
    collapseOnScroll: false
  })
};
</script>

<style></style>
