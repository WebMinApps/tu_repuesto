<template>
  <v-container>
    <v-layout>
      <app-panel>
        <template slot="title">
          Resumen
        </template>
        <template slot="buttons">
          <v-btn icon>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </template>
        <v-card-text>
          <app-tooltip
            bottom
            tooltip="Abrir ventana"
          >
            <app-dialog
              icon
              persistent
              divide
            >
              <template slot="title">
                Ventana 1
              </template>
              <template slot="activator">
                <v-icon>mdi-home</v-icon>
              </template>
              <p align="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci enim dolores, a rerum quo fugit, exercitationem distinctio, magni rem quidem deserunt! Enim obcaecati soluta dicta ab in expedita veniam nam!
              </p>
              <template slot="footer">
                <v-flex>
                  <v-btn
                    color="primary"
                    @click="emitClose"
                  >
                    Close
                  </v-btn>
                  <v-btn color="success">
                    OK
                  </v-btn>
                </v-flex>
              </template>
            </app-dialog>
          </app-tooltip>
        </v-card-text>
      </app-panel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    methods: {
        emitClose () {
            this.$emit('close', event);
        }
    }

};
</script>

<style>
</style>
