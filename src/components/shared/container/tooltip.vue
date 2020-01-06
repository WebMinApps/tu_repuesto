<template>
  <v-tooltip
    :color="color"
    :dark="darkness"
    :left="left"
    :right="right"
    :top="top"
    :bottom="bottom"
  >
    <template v-slot:activator="{ on }">
      <span v-on="on">
        <slot></slot>
      </span>
    </template>
    <span>
      <span
        v-html="html"
        v-if="html"
      ></span>
      <span v-else>{{tooltip}}</span>
    </span>
  </v-tooltip>
</template>

<script>
export default {
    props: {
        html: {
            required: false,
            type: String,
            default: ''
        },
        tooltip: {
            required: false,
            type: String,
            default: 'Tooltip misssing!!'
        },
        color: {
            required: false,
            type: String,
            default: ''
        },
        left: {
            required: false,
            type: Boolean,
            default: false
        },
        right: {
            required: false,
            type: Boolean,
            default: false
        },
        top: {
            required: false,
            type: Boolean,
            default: false
        },
        bottom: {
            required: false,
            type: Boolean,
            default: false
        },
    },
    computed: {
        darkness () {
            return this.$store.getters.ui_g_dark;
        }
    }
};
</script>

<style>
</style>
