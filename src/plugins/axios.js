/* eslint-disable no-undef */
import Vue from 'vue';
import axios from 'axios';

// Base URL
axios.defaults.baseURL = process.env.VUE_APP_apiURL;

// Full config:  https://github.com/axios/axios#request-config

// Authorization
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Content Type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Config Object
const config = {
  baseURL: process.env.baseURL || process.env.apiUrl || axios.defaults.baseURL,
  timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios;
      }
    },
    $axios: {
      get () {
        return _axios;
      }
    }
  });
};
Vue.use(Plugin);
export default Plugin;
