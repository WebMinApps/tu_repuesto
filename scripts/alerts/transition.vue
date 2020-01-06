<template>
  <div>
    <div class="text-center mb-4">
      <v-btn
        color="primary"
        @click="alert = !alert"
      >Toggle</v-btn>
    </div>
    <v-alert
      :value="alert"
      color="pink"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
      Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
    </v-alert>
  </div>
</template>
<script>
/*
Transition
The transition prop allows you to apply a transition to the alert which is viewable when the component hides and shows. For more information, you can checkout any of Vuetify's prebuilt transitions or review how to create your own.
*/

export default {
    data () {
        return {
            alert: true
        };
    }
};
</script>
