module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'comma-dangle': ['off'],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
