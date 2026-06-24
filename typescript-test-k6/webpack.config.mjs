import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import GlobEntries from 'webpack-glob-entries';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: GlobEntries('./tests/*.test.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
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
          from: resolve(__dirname, 'files'),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
