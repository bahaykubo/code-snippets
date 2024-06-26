module.exports = {
  reporter: 'mochawesome',
  'reporter-option': [
    'reportDir=artifacts/report/',
    'quiet=true',
    'overwrite=true',
    'html=true',
    'json=true',
    'time-out=false',
    'timestamp=yyyymmdd_HHMMss',
  ],
  recursive: true,
  require: ['@babel/register', 'mochawesome/register'],
  extension: ['.test.js'],
  timeout: 60000,
  retries: 0,
  'inline-diffs': true,
  'watch-files': ['**/*.js'],
};
