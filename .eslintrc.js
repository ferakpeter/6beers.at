module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'import',
    'react',
    'jest',
  ],
  'rules': {
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/newline-after-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true
    }],
    'no-console': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': [2, {
      'varsIgnorePattern': 'h'
    }],
    'quotes': [
      'error',
      'single', {
        'allowTemplateLiterals': true
      }
    ],
    'react/destructuring-assignment': 0,
    'react/jsx-uses-vars': 2,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'jest': true,
  }
};
