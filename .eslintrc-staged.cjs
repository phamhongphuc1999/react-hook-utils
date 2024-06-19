module.exports = {
  extends: './.eslintrc.cjs',
  rules: {
    'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
    'no-debugger': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
};
