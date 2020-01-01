import Vue from 'vue'
import Vuex from 'vuex'

import ui from './db/ui/state'
import admin from './db/admin/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ui, admin
  }
})
