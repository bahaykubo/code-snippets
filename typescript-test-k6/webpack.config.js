/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const GlobEntries = require('webpack-glob-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: GlobEntries('./tests/*.test.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
  optimization: {
    minimize: false, // Makes it easier to read
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Copy files directory to the destination folder
    // If you need to submit or use raw files on your test
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'files'),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
