module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  ignorePatterns: ["package.json", "package-lock.json", "yarn.lock", "index.html", "**/**/*.html"],
  rules: {
    'prettier/prettier': ['error', {
      'printWidth': 120,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'none',
      'arrowParens': 'always',
      'semi': false,
      'singleAttributePerLine': true,
      'endOfLine': 'auto'
    }],
    'camelcase': ["error", {
      'ignoreImports': true,
      'ignoreDestructuring': true
    }],
    'import/order': [
      'error',
      {
        'groups': [
          'external',
          'builtin',
          'internal',
          [
            'parent',
            'sibling'
          ],
          ['index', 'object', 'type']
        ],
        'pathGroups': [
          {
            'pattern': 'react-dom',
            'group': 'external',
            'position': 'before'
          },
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': [
          'react',
          'react-dom'
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'typescript': {}
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    }
  }
}