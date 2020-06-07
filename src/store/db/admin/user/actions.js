/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import common from '@/lib/common.js';

export default {
  // Carga los usuarios
  admin_a_users: ({ commit }) => {
    commit('ui_m_loading', true);
    let options = common.options();
    let url = common.url('/users');
    axios.get(url, options)
      .then((response) => {
        let users = response.data.data;
        commit('admin_m_users', users);
      })
      .catch(error => {
        let message = common.error(error);
        commit('ui_m_message', message);
      })
      .then(() => {
        commit('ui_m_loading', false);
      })
    ;
  },

  // Añade un usuario
  admin_a_users_add () { },

  // Edita un usuario
  admin_a_users_edit () { },

  // Elimina un usuario
  admin_a_users_del () { },

  // Modifica o crea el perfil
  admin_a_users_profile () { },

  // Crea o edita el perfil de tienda
  admin_a_users_seller () { }
};
