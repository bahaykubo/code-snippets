module.exports = {
  reporter: 'mochawesome',
  'reporter-option': [
    'reportDir=artifacts/report/',
    'quiet=true',
    'overwrite=true',
    'html=true',
    'json=true',
    'time-out=false',
  ],
  recursive: true,
  require: ['ts-node/register'],
  extension: ['.test.ts'],
  timeout: 60000,
  retries: 0,
  'inline-diffs': true,
  'watch-files': ['**/*.ts'],
};
