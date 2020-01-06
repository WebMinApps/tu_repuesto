<template>
  <v-footer
    absolute
    dark
  >
    <v-layout row>
      <v-flex
        xs12
        sm4
      ></v-flex>
      <v-flex
        xs12
        sm4
      >
        <v-container>
          <v-img
            src="@/assets/img/logominidark.png"
            height="15px"
            contain
          ></v-img>
        </v-container>
      </v-flex>
      <v-flex
        xs12
        sm4
      >

        <v-layout>
          <v-spacer></v-spacer>
          <template v-for="s in social">
            <app-tooltip
              top
              :tooltip="s.name"
              :color="s.color"
              :key="'ttp-'+s.name"
            >
              <a
                class="anone"
                :href="'link'+s.link"
                :key="s.name"
              >
                <v-btn
                  icon
                  :key="s.name"
                >
                  <v-icon :color="s.color">{{s.icon}}</v-icon>
                </v-btn>
              </a></app-tooltip>
            <v-spacer
              class="d-sm-none"
              :key="'spacer'+s.name"
            ></v-spacer>
          </template>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        name: 'Facebook',
        icon: 'mdi-facebook-box',
        link: 'https://facebook.com', color: '#048'
      }, {
        name: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://instagram.com', color: '#b3a'
      }, {
        name: 'Twitter',
        icon: 'mdi-twitter',
        link: 'https://twitter.com', color: '#09d'
      },
    ]
  })
};
</script>

<style>
</style>
