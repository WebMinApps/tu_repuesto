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
      2
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
    'vue/attributes-order': 1,
    'vue/no-confusing-v-for-v-if': 2,
    'vue/order-in-components': 2,
    'vue/this-in-template': 2,
    'vue/array-bracket-spacing': 2,
    'vue/arrow-spacing': 2,
    'vue/block-spacing': 2,
    'vue/brace-style': 2,
    'vue/camelcase': 2,
    'vue/comma-dangle': 2,
    'vue/component-name-in-template-casing': 2,
    'vue/key-spacing': 2,
    'vue/match-component-file-name': 2,
    'vue/no-boolean-default': 2,
    'vue/no-restricted-syntax': 2,
    'vue/object-curly-spacing': 2,
    'vue/require-direct-export': 2,
    'vue/script-indent': 0,
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': 2,
    'vue/v-on-function-call': 'error'
  },

  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ]
};
