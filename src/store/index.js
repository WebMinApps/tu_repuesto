import Vue from 'vue';
import Vuex from 'vuex';

import ui from './db/ui/state';
import user from './db/user/state.js';
import admin from './db/admin/index.js';
import ask from './db/ask/state.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    user,
    admin,
    ask
  }
});
