<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="deep-purple accent-4"
      dark
      scroll-target="#scrolling-techniques-6"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Collapsing Bar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-checkbox v-model="collapseOnScroll" color="white" hide-details></v-checkbox>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-6" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
/*
Collapsible bars
With the collapse and collapse-on-scroll props you can easily control the state of toolbar that the user interacts with.
*/

export default {
  data: () => ({
    collapseOnScroll: true
  })
};
</script>