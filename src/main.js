import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import VueMomentLib from 'vue-moment-lib';
import './plugins/axios';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@babel/polyfill';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/css/styles.css';
import '@/plugins/imports.js';
import VueTheMask from 'vue-the-mask';


Vue.config.productionTip = true;

Vue.use(VueMomentLib);
Vue.use(VueTheMask);

new Vue({
  vuetify,
  store,
  router,
  mounted () {
    this.$store.dispatch('user_a_autoload');
  },
  render: h => h(App)
}).$mount('#app');

