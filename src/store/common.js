/* eslint-disable no-console */
import jwt from 'jsonwebtoken';

export default {
  // Nombre del Token
  token: 'token',
  // Salt de encriptacion
  salt: 'Cpvz13A1otc',
  //  Constante para final de las URL y forzar formato json
  format: '?format=json',
  colors: ['', 'success', 'info', 'warning', 'error', 'primary'],
  // Crear url con formato json
  url (url) { return url + this.format; },
  // Establecer el Token
  setToken (payload) { return sessionStorage.setItem(this.token, payload); },
  // Obtener el token (Recursivo)
  getToken () { return sessionStorage.getItem(this.token); },
  // Eliminar el Token
  delToken () { return sessionStorage.removeItem(this.token); },
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
