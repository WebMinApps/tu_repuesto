/* eslint-disable no-console */
import axios from 'axios';
import jwt from 'jsonwebtoken';

// Salt Token
const dctr = 'Cpvz13A1otc';
const f = '?format=json';

export default {
  user_a_autoload ({ commit }) {
    let token = sessionStorage.getItem('token');
    if (token) {
      // Establecemos que estamos cargando datos del backend
      commit('ui_m_loading', true);
      // Eliminamos cualquier posible mensaje
      commit('ui_m_message', false);

      // Recurso al API de autocarga de session
      let URL = '/autoload' + f;

      // Autorizacion para el backend
      const options = { headers: { Authorization: token } };

      axios.post(URL, null, options)
        .then((response) => {
          let r = response.data.data.autocargado;
          if (r) {
            let tmptoken = jwt.verify(token, dctr);
            commit('user_m_load', tmptoken.data);
            commit('ui_m_message', { title: '', text: 'Bienvenido!', type: 'success' });
          } else {
            commit('ui_g_message', { title: '', text: 'La sesion ha expirado', type: 'warning' });
          }
        })
        .catch((error) => { // Holder para el error
          let message = '';
          // Verificamos si el error es enviado desde el backend
          if (error.response !== undefined) {
            // Asignamos el error del backend al holder
            message = error.response.data.error.message;
            // Enviamos el error al UI
            commit('ui_m_message', { title: 'Error', text: message, type: 'error' });
          } else {
            // Asignamos el error enviado por el navegador
            message = error;
            // Enviamos el error como warning al holder
            commit('ui_m_message', { title: 'Error', text: message, type: 'warning' });
          }
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
    let URL = '/login' + f;
    // Datos de usuario a enviar al API para el inicio de sesion
    let userdata = { email: payload.email, pass: payload.pass };
    // Peticion de inicio de sesion
    axios.post(URL, userdata)
      .then((response) => {
        // Token Recibida desde el API sin alterar (desencriptar)
        let rawtoken = response.data.data.token;
        // Guardadmos el Token en SessionStorage
        sessionStorage.setItem('token', rawtoken);
        //Desencriptamos el Token para obtener los datos del usuario
        let tmptoken = jwt.verify(rawtoken, dctr);
        // Obtenemos solo los datos del usuario
        let userdata = tmptoken.data;
        // Guardamos los datos del usuario en Vuex
        commit('user_m_load', userdata);
        // Enviamos un mensaje Sucess al Holder
        commit('ui_m_message', { title: '', text: 'Bienvenido!', type: 'success' });
      }).catch(error => {
        // Holder para el error
        let message = '';
        // Verificamos si el error es enviado desde el backend
        if (error.response !== undefined) {
          // Asignamos el error del backend al holder
          message = error.response.data.error.message;
          // Enviamos el error al UI
          commit('ui_m_message', { title: 'Error', text: message, type: 'error' });
        } else {
          // Asignamos el error enviado por el navegador
          message = error;
          // Enviamos el error como warning al holder
          commit('ui_m_message', { title: 'Error', text: message, type: 'warning' });
        }
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
    let rawtoken = sessionStorage.getItem('token');
    if (rawtoken) {
      console.log(rawtoken);
      // Valores de opciones para la Peticion de cierre de session al API
      const options = { headers: { Authorization: rawtoken } };
      // Recurso al API de cierre de sesion
      const URL = '/logout' + f;
      // Peticion de cierre de sesion
      axios.post(URL, null, options)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          sessionStorage.removeItem('token');
          commit('user_m_unload');
          commit('ui_m_message', { title: 'Cerrar Sesion', text: 'Has cerrado sesion', type: 'info' });
        })
        .catch(error => {
          // Holder para el error
          let message = '';
          // Verificamos si el error es enviado desde el backend
          if (error.response !== undefined) {
            // Asignamos el error del backend al holder
            message = error.response.data.error.message;
            // Enviamos el error al UI
            commit('ui_m_message', { title: 'Error', text: message, type: 'error' });
          } else {
            // Asignamos el error enviado por el navegador
            message = error;
            // Enviamos el error como warning al holder
            commit('ui_m_message', { title: 'Error', text: message, type: 'warning' });
          }

        })
        .then(() => {
          // Asignamos que se termino toda carga al UI
          commit('ui_m_loading', false);
        });
    }
  },
  user_a_register () {
    alert('Register Action');
  }
};
