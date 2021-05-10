module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
