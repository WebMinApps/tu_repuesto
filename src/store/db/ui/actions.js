export default {
  ui_a_dark ({ commit }, payload) {
    commit('ui_m_dark', payload);
  },
  ui_a_loading ({ commit }, payload = false) {
    commit('ui_m_loading', payload);
  },
  ui_a_message ({ commit }, payload = false) {
    commit('ui_m_message', payload);
  }
};
