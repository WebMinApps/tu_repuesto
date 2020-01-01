<template>
  <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-3 pt-3 pb-12">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-boilerplate class="mb-6" type="card-avatar, article, actions"></v-boilerplate>

          <v-boilerplate type="date-picker"></v-boilerplate>
        </v-col>

        <v-col cols="12" md="4">
          <v-boilerplate class="mb-6" type="article, actions"></v-boilerplate>

          <v-boilerplate class="mb-6" type="table-heading, list-item-two-line, image, table-tfoot"></v-boilerplate>
        </v-col>

        <v-col cols="12" md="4">
          <v-boilerplate
            class="mb-6"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-boilerplate>

          <v-boilerplate type="list-item-avatar-three-line, image, article"></v-boilerplate>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
/*

Ejemplos

Below is a collection of simple to complex examples.

Boilerplate component
The v-skeleton-loader can be used as boilerplate designs when creating mockups. Mix and match various pre-defined options or create your own unique implementations. In this example, we are extending the v-skeleton-loader into a new component called v-boilerplate for use as a functional boilerplate component.

*/

export default {
  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: ["theme"],

  components: {
    // Create a new component that
    // extends v-skeleton-loader
    VBoilerplate: {
      functional: true,

      render(h, { data, props, children }) {
        return h(
          "v-skeleton-loader",
          {
            ...data,
            props: {
              boilerplate: true,
              elevation: 2,
              ...props
            }
          },
          children
        );
      }
    }
  }
};
</script>