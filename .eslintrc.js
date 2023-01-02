module.exports = {
  // make sure put prettier at last(at extends part),
  // so it gets the chance to override other things(https://github.com/prettier/eslint-config-prettier)
  extends: ['universe', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
