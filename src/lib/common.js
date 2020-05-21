/* eslint-disable no-console */
import jwt from 'jsonwebtoken';

export default {
  // Nombre del Token
  token: 'token',
  // Token lang
  langtoken: 'lang',
  // Salt de encriptacion
  salt: 'Cpvz13A1otc',
  //  Constante para final de las URL y forzar formato json
  format: '?format=json',
  // Colores de Vistas
  colors: ['', 'success', 'info', 'warning', 'error', 'primary'],
  // Tipos de usuario
  user_types: ['Usuario', 'Vendedor', 'Mayorista', 'Supervisor', 'Agente', 'Administrador'],
  // Crear url con formato json
  url (url) { return url + this.format; },
  // Establecer el Token
  setToken (payload) { return sessionStorage.setItem(this.token, payload); },
  // Obtener el token (Recursivo)
  getToken () { return sessionStorage.getItem(this.token); },
  // Eliminar el Token
  delToken () { return sessionStorage.removeItem(this.token); },
  // set load lang token
  langToken (value) {
    let langtoken = '';
    if (value) {
      sessionStorage.setItem(this.langtoken, value);
      langtoken = value;
    } else {
      langtoken = sessionStorage.getItem(this.langtoken);
      if (!langtoken) {
        sessionStorage.setItem(this.langtoken, 'es');
        langtoken = 'es';
      }
    }
    return langtoken;
  },
  // Verificar el Token
  verify (Token) { return jwt.verify(Token, this.salt); },
  // Creamos el objeto options para las consultas al api con autorizacion
  options () {
    let Token = this.getToken(), options = false;
    if (Token) {
      options = { headers: { 'Authorization': Token } };
    }
    return options;
  },
  // Formato Correo Eletrónico
  formatEmail (email) {
    let regexemail = /^[a-zA-Z0-9!#$&*?^{}˜.Çç-]+(\.[a-zA-Z0-9!#$&*?^{}˜.Çç-]+)*@([a-zA-Z0-9]+([a-zA-Z0-9-]*)\.)+[a-zA-Z]+$/;
    let validemail = false;
    if (email != undefined) {
      validemail = email.match(regexemail) ? true : false;
    }
    return validemail;
  },
  // Obtiene los datos de repuesta de una peticion Axios
  getdata (response) {
    let data = null;
    if (response != undefined) {
      if (response.data != undefined) {
        if (response.data.data != undefined) {
          data = response.data.data;
        }
      }
    }
    return data;
  },
  // Objeto error para el toast
  error (error) {
    // Holder para el error
    let message = false, type = this.colors[4];
    // Verificamos si el error es enviado desde el backend
    if (error.response !== undefined) {
      // Asignamos el error del backend al holder
      message = error.response.data.error.message;
      type = this.colors[4];
    } else {
      // Asignamos el error enviado por el navegador
      message = error;
      type = this.colors[3];
    }
    // Retornamos un objeto con el formato de Error
    return { text: message, type: type };
  },
  // Cambia formato de fecha DD/MM/AAAA -> AAAA-MM-DD
  parseDate (date) {
    if (!date) return null;
    const [month, day, year] = date.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  },
  // Cambia formato de fecha a AAAA-MM-DD -> DD/MM/AAAA
  formatDate (date) {
    if (!date) return null;
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  },
  // Format Phone Number
  formatPhone (phone) {
    return phone;
  },
  // Animacion de elementos CSS con [animatecss]
  animateCSS (element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);
    function handleAnimationEnd () {
      node.classList.remove('animated', animationName);
      node.removeEventListener('animationend', handleAnimationEnd);
      if (typeof callback === 'function') callback();
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }
};
