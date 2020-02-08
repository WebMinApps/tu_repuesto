import Vue from 'vue';
import Vuex from 'vuex';

import ui from './db/ui/state';
import user from './db/user/state.js';
import admin from './db/admin/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    ui,
    user,
    admin,
  }
});
