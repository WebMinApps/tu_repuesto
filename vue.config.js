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
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://webminapps.github.io/tu_repuesto/' : '/'
};
