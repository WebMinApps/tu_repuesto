<template>
  <v-layout>
    <v-flex>
      <v-card :dark="darkness">
        <v-card-title
          class="primary"
          style="margin:0px"
        >
          <span>Ventana</span>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>aasd</v-container>
        </v-card-text>
        <v-card-actions>
          <v-container>
            actions
          </v-container>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    computed: {
        darkness () {
            return this.$store.getters.ui_g_dark;
        }
    }
};
</script>

