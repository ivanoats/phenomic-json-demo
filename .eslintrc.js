module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single']
  }
}
