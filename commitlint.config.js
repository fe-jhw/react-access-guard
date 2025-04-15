module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'ci',
        'deps'
      ]
    ],
    'subject-case': [0],
    'body-max-line-length': [0]
  }
}; 