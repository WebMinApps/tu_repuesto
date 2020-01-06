<template>
  <span>
    <v-btn
      :dark="darkness"
      :icon="icon"
      @click="openWindow"
    >
      <slot name="activator"></slot>
    </v-btn>
    <v-dialog
      :fullscreen="fullscreen"
      :width="width"
      v-model="dialog"
      :dark="darkness"
      :persistent="persistent"
    >
      <app-panel :notitle="notitle">
        <v-btn
          :height="height"
          :width="width"
          v-if="notitle"
          text
          @click="closeWindow"
          fab
          x-small
          absolute
          style="position:absolute;top:0px;right:0px"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <template slot="title">
          <slot name="title"></slot>
        </template>
        <template slot="buttons">
          <slot name="buttons"></slot>
          <template v-if="togglefull">
            <app-tooltip
              bottom
              :tooltip="fullscreen?'Cerrar Pantalla Completa':'Pantalla Completa'"
            >
              <v-btn
                icon
                @click="toogleFullScreen"
              >
                <v-icon>
                  mdi-fullscreen{{fullscreen?'-exit':''}}
                </v-icon>
              </v-btn>
            </app-tooltip>
          </template>
          <app-tooltip
            bottom
            tooltip="Cerrar"
          >
            <v-btn
              icon
              @click="closeWindow"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </app-tooltip>
        </template>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </app-panel>
    </v-dialog>
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      required: false,
      default: false
    },
    fullscreen: {
      required: false,
      type: Boolean,
      default: false
    },
    persistent: {
      required: false,
      type: Boolean,
      default: false
    },
    notitle: {
      required: false,
      type: Boolean,
      default: false
    },
    togglefull: {
      required: false,
      type: Boolean,
      default: false
    },
    height: {
      required: false,
      type: String,
      default: '300'
    },
    width: {
      required: false,
      type: String,
      default: '300'
    },
    divide: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    }
  },
  methods: {
    openWindow () {
      this.dialog = true;
    },
    closeWindow () {
      this.dialog = false;
    },
    toogleFullScreen () {
      this.fullscreen = !this.fullscreen;
    }

  }
};
</script>

<style>
</style>
