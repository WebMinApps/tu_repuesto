import user from './user/state';
import brands from './brands/state';
import models from './models/state';
import sparts from './sparts/state.js';
import parts from './parts/state.js';
import ask from './ask/state';
import locale from './locale/state.js';

export default {
  state: {
    admin: {
      users: [],
      brands: [],
      models: [],
      subparts: [],
      parts: [],
      locations: [],
      ask: []
    }
  },
  modules: { user, brands, models, sparts, parts, ask, locale }
};
