module.exports = {
  recursive: true,
  timeout: 30000,
  retries: 0,
  'inline-diffs': true,
  extension: ['.test.ts'],
  require: ['ts-node/register'],
  'watch-files': ['**/.ts'],
  reporter: 'mochawesome',
  'reporter-options': [
    'reportDir=artifacts/report',
    'quiet=true',
    'overwrite=true',
    'html=true',
    'json=true',
    'time-out=false',
    'timestamp=yyyymmdd_HHMMss',
  ],
};
