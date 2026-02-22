// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  // The `ignores` option in the option (first argument) is specifically treated to always be global ignores
  // And will **extend** the config's default ignores, not override them
  // You can also pass a function to modify the default ignores
  // ****
  // ****
  // Don't change any rules if you don't know what they mean
  // ****
  // ****
  ignores: [
    '**/fixtures',
    // ...globs
  ],

  // Parse the `.gitignore` file to get the ignores, on by default
  gitignore: true,

  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: {
    // Enable or disable specific rules
    overrides: {
      'vue/block-order': ['error', {
        order: [['template', 'script'], 'style'],
      }],
      'no-console': 'off',
      // 'vue/html-self-closing': ['error', {
      //   html: {
      //     normal: 'never',
      //   },
      // }],
    },
  },

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  formatters: {
    css: true,
  },
}, {
  // Override or add specific rules
  files: ['src/**/*.ts'],
  rules: {
    'no-console': 'off',
  },
})
