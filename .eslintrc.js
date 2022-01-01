module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  globals: {
    window: true,
  },
  parserOptions: { ecmaVersion: 9, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:jest-dom/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
}
