module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'bug', 'doc', 'test', 'build', 'type', 'refactor', 'style']],
  },
};
