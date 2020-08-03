module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'prettier',
    'plugin:cypress/recommended'
  ],
  plugins: ['chai-friendly'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true
      },
      rules: {
        strict: 'off'
      }
    }
  ],
  ignorePatterns: ['**/__tests__/*.spec.ts', '**/webpack.config.js']
};
