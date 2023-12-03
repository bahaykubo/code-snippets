module.exports = {
  recursive: true,
  timeout: 10000,
  retries: 0,
  'inline-diffs': true,
  extension: ['.test.ts'],
  require: ['ts-node/register', 'mocha'],
  'watch-files': ['test/**/*.ts'],
};
