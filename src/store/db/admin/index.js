import user from './user/state';
import models from './models/state';
import brands from './brands/state';
import ask from './ask/state';
import locale from './locale/state.js';

export default {
  namespaced: true,
  modules: { user, models, brands, ask, locale }
};
