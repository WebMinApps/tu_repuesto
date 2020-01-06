<template>
  <v-layout>
    <v-flex>
      <v-card
        :height="height"
        :width="width"
        :dark="darkness"
      >
        <v-card-title
          v-if="!notitle"
          class="primary"
          :style="stylecss"
        >
          <slot name="title" />
          <v-spacer />
          <slot name="buttons" />
        </v-card-title>
        <slot />
        <v-divider v-if="divide" />
        <slot name="footer" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    notitle: {
      required: false,
      type: Boolean,
    },
    width: {
      required: false,
      type: String,
      default: ''
    },
    height: {
      required: false,
      type: String,
      default: ''
    },
    divide: {
      required: false,
      type: Boolean,
      defualt: false
    }
  },
  data: () => ({
    stylecss: {
      'margin-top': '0px',
      'margin-bottom': '10px',
      'margin-left': '0px',
      'margin-right': '0px',
      'padding-top': '5px',
      'padding-bottom': '5px',
      'padding-left': '14px',
      'padding-right': '14px',
    }
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  }
};
</script>

