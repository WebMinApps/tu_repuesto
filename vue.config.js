/* eslint-disable no-undef */
module.exports = {
  pwa: {
    name: 'Tu Repuesto'
  },

  assetsDir: 'assets',
  runtimeCompiler: true,

  css: {
    requireModuleExtension: true
  },

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
