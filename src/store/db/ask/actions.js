import axios from 'axios';
const Token = sessionStorage.getItem('token');
const options = { headers: { 'Authorization': Token } };

export default {
  ask_a_ask: ({ commit }) => {
    commit('ui_m_loading', true);
    let url = 'ask';
    if (Token) {
      axios.post(url, null, options)
        .then(() => { })
        .catch(() => { });
    }
    commit('ui_m_loading', false);
  }
};
