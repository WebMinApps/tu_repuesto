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
            <a
              :href="'link'+s.link"
              :key="s.name"
            >
              <v-btn
                icon
                :key="s.name"
              >
                <v-icon>{{s.icon}}</v-icon>
              </v-btn>
            </a>
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
                link: 'https://facebook.com'
            }, {
                name: 'Instagram',
                icon: 'mdi-instagram',
                link: 'https://facebook.com'
            }, {
                name: 'Twitter',
                icon: 'mdi-twitter',
                link: 'https://facebook.com'
            },
        ]
    })
};
</script>

<style>
</style>
