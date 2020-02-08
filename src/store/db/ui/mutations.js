export default {
  ui_m_dark (state, payload) {
    let checkpayload = payload ? payload == undefined ? true : false : !state.dark;
    state.dark = checkpayload;
  },
  ui_m_notificationsbtn (state, payload = false) {
    let checkpayload = payload ? true : false;
    state.notificationsbtn = checkpayload;
  },
  ui_m_loading (state, payload = false) {
    let checkpayload = payload ? true : false;
    state.loading = checkpayload;
  },
  ui_m_message (state, payload = false) {
    let checkpayload = {};
    checkpayload = {
      text: payload.text ? payload.text : '',
      type: payload.type ? payload.type : '',
      timeout: payload.timeout ? payload.timeout : 3000,
      full: payload.full ? payload.full : false
    };
    state.message = checkpayload;
  }
};
