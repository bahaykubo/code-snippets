<h1>Test with Playwright in Typescript</h1>

- [Setup](#setup)
  - [Install packages](#install-packages)
- [Test](#test)
  - [Test user password](#test-user-password)
  - [Run UI Tests](#run-ui-tests)
  - [Run API Tests](#run-api-tests)

Comparing xml parsers and builders:

- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
- [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2)
- [xml-js](https://github.com/nashwaan/xml-js)

# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

See instructions from main [README](../README.md#node-with-nvm) to setup node with nvm

## Install packages

To install packages, run with:

```bash
yarn ci
```

# Test

## Test user password

These tests the [Swag Labs sauce demo app](https://www.saucedemo.com) and requires a `testpassword` environment variable with the sauce demo user password.

Either create a `.env` file with this or set the env var from your cli command before the test script.

```bash
# .env
testpassword='SETPASSWORDHERE'

# OR
testpassword=SETPASSWORDHERE yarn test-ui
```

## Run UI Tests

```bash
yarn test-ui
```

## Run API Tests

```bash
yarn test-api
```
