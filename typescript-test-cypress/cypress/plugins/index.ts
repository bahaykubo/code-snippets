import webpackPreprocessor from '@cypress/webpack-preprocessor';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import mochawesomePlugin from 'cypress-mochawesome-reporter/plugin';

export default (on: any) => {
  on(
    'file:preprocessor',
    webpackPreprocessor({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
          plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [{ loader: 'ts-loader' }],
            },
          ],
        },
      },
    }),
  );

  mochawesomePlugin(on);

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // Log output to the terminal.
  //
  // When running in headless mode, cy.log(...) calls do not appear in the log. So if you
  // need to capture output in that situation, in a test call:
  //
  //    cy.task('log', 'This will be output to the terminal')
  //
  // See https://stackoverflow.com/questions/52070262/cypress-pipe-console-log-and-command-log-to-output
  //
  on('task', {
    log(message: any) {
      console.log(message);
      return null;
    },
  });
};
