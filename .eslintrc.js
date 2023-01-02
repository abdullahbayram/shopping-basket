module.exports = {
  // make sure put prettier at last(at extends part),
  // so it gets the chance to override other things(https://github.com/prettier/eslint-config-prettier)
  extends: ['universe', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/style-prop-object': 'off',
  },
};
