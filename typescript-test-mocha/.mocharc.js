module.exports = {
  recursive: true,
  timeout: 30000,
  retries: 0,
  'inline-diffs': true,
  extension: ['.test.ts'],
  require: ['ts-node/register'],
};
