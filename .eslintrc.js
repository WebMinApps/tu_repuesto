module.exports = {
  env: {
    browser: true,
    es6: true
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],

  rules: {
    indent: [
      'error',
      4
    ],
    'linebreak-style': 0,
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'vue/attributes-order': 'warning',
    'vue/no-confusing-v-for-v-if': 'warning',
    'vue/order-in-components': 'warning',
    'vue/this-in-template': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'warning',
    'vue/brace-style': 'warning',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error'
  },

  'extends': [
    'eslint:recommended',
    'plugin:vue/strongly-recommended'
  ]
};
