import axios from 'axios';
import common from '@/store/common.js';

export default {
  ask_a_create: ({ commit }, payload) => {
    // Url de añadir pregunta
    let url = common.url('ask/add');
    // objeto opciones de consultas con auth
    let options = common.options();
    if (options) {
      //establecemos que se esta haciendo una carga
      commit('ui_m_loading', true);
      // limpiamos posibles mensajes
      commit('ui_m_message', false);
      // consilta axios
      axios.post(url, payload, options)
        .then(() => {
          //let data = response.data.data;
          // enviamos mensajes de pregunta enviada
          commit('ui_m_message', {
            text: 'Pregunta Agregada',
            type: 'success'
          });
        })
        .catch((error) => {
          let message = common.error(error);
          commit('ui_m_message', message);
        }).then(() => {
          commit('ui_m_loading', false);
        });
    }
  }
};
