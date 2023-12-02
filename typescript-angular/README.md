<h1>Sample Angular Bike Shop</h1>

- [Development server](#development-server)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
  - [Running end-to-end tests with Playwirght](#running-end-to-end-tests-with-playwirght)
- [Further help](#further-help)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Running end-to-end tests with Playwirght

To run e2e tests with playwright, use the webServer property from the PlaywrightTestConfig to start the angular app

```javascript
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn ng serve',
    port: 4200,
    timeout: 60000, // Default value
  },
};

export default config;
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
