<template>
  <div class="text-center">
    <v-btn dark color="red darken-2" @click="snackbar = true">Open Snackbar</v-btn>

    <v-snackbar v-model="snackbar" :multi-line="multiLine">
      {{ text }}
      <v-btn color="red" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
/*
Multi Line
The multi-line property extends the height of the v-snackbar to give you a little more room for content.
*/

export default {
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: "I'm a multi-line snackbar."
  })
};
</script>