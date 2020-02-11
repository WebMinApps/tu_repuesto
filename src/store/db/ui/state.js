import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: false,
  state: {
    dark: true,
    notificationsbtn: true,
    loading: false,
    message: {
      text: '',
      type: null,
      timeout: 5000,
      full: false
    }
  },
  getters,
  mutations,
  actions
};
