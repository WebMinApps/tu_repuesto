<template>
  <div class="text-center d-flex align-center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Button</v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon color="primary" dark v-on="on">mdi-home</v-icon>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">This text has a tooltip</span>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
  </div>
</template>

<script>
/*
Tooltips
The v-tooltip component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a v-model. When activated, tooltips display a text label identifying an element, such as a description of its function.
*/
</script>