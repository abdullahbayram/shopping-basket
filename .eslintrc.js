module.exports = {
  env: {
    'jest/globals': true,
  },
  // make sure put prettier at last(at extends part),
  // so it gets the chance to override other things(https://github.com/prettier/eslint-config-prettier)
  extends: [
    'universe/native',
    'airbnb',
    'airbnb/hooks',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'max-lines': ['error', { max: 100, skipComments: true, skipBlankLines: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-console': 'off',
    // react
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/style-prop-object': 'off',
    'react/destructuring-assignment': 'warn',
    'react/prop-types': ['error', { ignore: ['navigation', 'isFocused', 'dispatch'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [2, { namedComponents: ['arrow-function'] }],
    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // react-native
    'react-native/no-inline-styles': 'error',
    // jest
    'jest/prefer-to-have-length': 'error',
    'jest/no-disabled-tests': 'warn',
  },
};
