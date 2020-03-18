export default {
  user_m_load: (state, payload) => {
    let user = {
      ID: payload.ID,
      email: payload.email,
      doc: payload.doc,
      doctype: payload.doctype,
      nac: payload.nac,
      name: payload.name,
      last: payload.last,
      level: payload.level,
      phone: payload.phone,
      birth: payload.birth,
      created: payload.create,
      verified: payload.verified,
      image: payload.image,
      login_count: payload.login_count,
      ip: payload.ip,
      config: payload.config,
      theme: payload.theme
    };
    // eslint-disable-next-line no-console
    state.user = user;
  },
  user_m_unload: (state) => {
    state.user = {};
  },
  user_m_notifications: (state, payload) => {
    // asigna todas ls notificacione (Carga inicial)
    state.notification = payload;
  },
  user_m_notification: (state, payload) => {
    // Cambia propiedades de una notificacion (Visto, Editado)
    state.notifications.forEach((n, index) => {
      if (n.ID == payload.ID) {
        n[index] = payload;
      }
    });
  }
};
