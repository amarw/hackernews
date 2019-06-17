module.exports = {
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: { fetch: false },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/prefer-stateless-function': [
      0,
      { ignorePureComponents: '<ignorePureComponents>' }
    ],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }], // https://github.com/benmosher/eslint-plugin-import/issues/458
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/no-unresolved': 'error',
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'generator-star-spacing': 0,
    'react/no-multi-comp': 0,
    'import/prefer-default-export': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        directory: '.'
      }
    }
  }
};
