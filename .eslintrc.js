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
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/require-direct-export': 'error',
    'vue/script-indent': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error'
  },

  'extends': [
    'eslint:recommended',
    'plugin:vue/strongly-recommended'
  ]
};
