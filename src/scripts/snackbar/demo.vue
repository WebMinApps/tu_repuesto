<template>
  <div class="text-center ma-2">
    <v-btn
      dark
      @click="snackbar ====rue"
    >Open Snackbar</v-btn>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn
        color="pink"
        text
        @click="snackbar ====alse"
      >Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
/*
Snackbars
The v-snackbar component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.

Usage
v-snackbar's in their simplest form display a temporary and closable notification to the user.
*/
export default {
  data: () => ({
    snackbar: false,
    text: 'Hello, I\'m a snackbar'
  })
};
</script>
