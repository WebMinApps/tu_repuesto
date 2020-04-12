/* eslint-disable no-console */
import axios from 'axios';
import common from '@/lib/common.js';

export default {
  user_a_autoload ({ commit }) {
    // Establecemos que estamos cargando datos del backend
    let options = common.options();
    if (options) {
      // Recurso al API de autocarga de session
      let URL = common.url('/autoload');
      // Establecemos que estamos cargando datos del backend
      commit('ui_m_loading', true);
      // Eliminamos cualquier posible mensaje
      commit('ui_m_message', false);
      axios.post(URL, null, options)
        .then((response) => {
          let r = response.data.data.autocargado;
          if (r) {
            let tmptoken = common.verify(common.getToken());
            commit('user_m_load', tmptoken.data);
            commit('ui_m_message', { title: '', text: 'Bienvenido!', type: 'success' });
          } else {
            commit('ui_g_message', { title: '', text: 'La sesion ha expirado', type: 'warning' });
          }
        })
        .catch((error) => {
          let message = common.error(error);
          commit('ui_m_message', message);
        })
        .then(() => {
          commit('ui_m_loading', false);
        });
    }
  },
  user_a_login ({ commit }, payload) {
    // Asignamos que comenzo una carga al UI
    commit('ui_m_loading', true);
    // Borramos cualquier mensaje
    commit('ui_m_message', false);
    // Recurso al API de inicio de session
    let URL = common.url('/login');
    // Datos de usuario a enviar al API para el inicio de sesion
    let userdata = { email: payload.email, pass: payload.pass };
    // Peticion de inicio de sesion
    axios.post(URL, userdata)
      .then((response) => {
        // Token Recibida desde el API sin alterar (desencriptar)
        let rawtoken = response.data.data.token;
        // Guardadmos el Token en SessionStorage
        common.setToken(rawtoken);
        //Desencriptamos el Token para obtener los datos del usuario
        let tmptoken = common.verify(rawtoken);
        // Obtenemos solo los datos del usuario
        let userdata = tmptoken.data;
        // Guardamos los datos del usuario en Vuex
        commit('user_m_load', userdata);
        // Enviamos un mensaje Sucess al Holder
        commit('ui_m_message', { title: '', text: 'Bienvenido!', type: 'success' });
      }).catch(error => {
        let message = common.error(error);
        commit('ui_m_message', message);
      }).then(() => {
        // Asignamos que se termino toda carga al UI
        commit('ui_m_loading', false);
      });
  },
  user_a_logout ({ commit }) {
    // Asignamos que comenzo una carga al UI
    commit('ui_m_loading', true);
    // Borramos cualquier mensaje
    commit('ui_m_message', false);
    // Verificamos que hy datos de session en UI
    let options = common.options;
    if (options) {
      // Recurso al API de cierre de sesion
      const URL = common.url('/logout');
      // Peticion de cierre de sesion
      axios.post(URL, null, options)
        .then(() => {
          // eslint-disable-next-line no-console
          common.delToken();
          commit('user_m_unload');
          commit('ui_m_message', { title: 'Cerrar Sesion', text: 'Has cerrado sesion', type: 'info' });
        })
        .catch(error => {
          let message = common.error(error);
          commit('ui_m_message', message);
        })
        .then(() => {
          // Asignamos que se termino toda carga al UI
          commit('ui_m_loading', false);
        });
    }
  },
  user_a_register ({ commit }, payload) {
    // Asignamos que comenzo una carga al UI
    commit('ui_m_loading', true);
    // Borramos cualquier mensaje
    commit('ui_m_message', false);

    // url de crear usuario
    let url = common.url('/user/new');
    // Organizamos los datos de entrada en payload
    let userdata = {
      email: payload.email,
      pass: payload.pass,
      doc: payload.doc,
      doctype: payload.doctype,
      nac: payload.nac,
      name: payload.name,
      last: payload.last,
      level: payload.level,
      phone: payload.phone,
      birth: payload.birth,
      image: payload.image,
      seller: {
        name: payload.seller.name,
        image: payload.seller.image,
        rif: payload.seller.rif,
        nac: payload.seller.nac,
        phone: payload.seller.phone,
        city: payload.seller.city,
        address: payload.seller.address
      },
      //created: payload.created,
      //active: payload.active,
      //verified: "0",
      profile: payload.profile
    };
    axios
      .post(url, userdata)
      .then((response) => {
        let resp = response.data;
        console.log(resp);
        commit('ui_m_message', { title: '', text: 'Gracias por registrarte!!', type: 'success' });
      })
      .catch(error => {
        let message = common.error(error);
        commit('ui_m_message', message);
      })
      .then(() => {
        // Asignamos que se termino toda carga al UI
        commit('ui_m_loading', false);
      });
  }
};
