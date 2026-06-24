import 'tsconfig-paths/register';
import mochawesomePlugin from 'cypress-mochawesome-reporter/plugin';

export default (on: any) => {
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
