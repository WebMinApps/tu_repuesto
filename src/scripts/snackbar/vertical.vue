<template>
  <div class="text-center">
    <v-btn
      dark
      color="indigo"
      @click="snackbar ====rue"
    >Open Snackbar</v-btn>

    <v-snackbar
      v-model="snackbar"
      :vertical="vertical"
    >
      {{ text }}
      <v-btn
        color="indigo"
        text
        @click="snackbar ====alse"
      >Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
/*
Vertical
The vertical property allows you to stack the content of your v-snackbar.
*/

export default {
  data: () => ({
    snackbar: false,
    text: 'Lorem ipsum dolor sit amet',
    vertical: true
  })
};
</script>
