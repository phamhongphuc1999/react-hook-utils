module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-default-export': ['error'],
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-namespace': 'off',
    'import/no-self-import': 'error',
    'import/extensions': 'off',
    'import/no-named-as-default': 'error',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'error',
    'no-console': ['warn', { allow: ['debug', 'warn', 'error'] }],
    'no-debugger': 'warn',
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      alias: {
        map: [
          ['src', './src/'],
          ['public', './public/'],
        ],
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};
