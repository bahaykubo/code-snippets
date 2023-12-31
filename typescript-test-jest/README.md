<h1>Test with Jest in Typescript</h1>

- [Setup](#setup)
  - [Install packages](#install-packages)
- [Test](#test)
  - [Run specific tests](#run-specific-tests)
  - [Run specific tests using grep](#run-specific-tests-using-grep)
  - [Run tests in parallel](#run-tests-in-parallel)
  - [Watch a test file](#watch-a-test-file)
  - [Test tagging](#test-tagging)
- [Lint and Format](#lint-and-format)
- [Structure](#structure)
  - [Artifacts](#artifacts)
  - [Config](#config)
  - [Constants](#constants)
  - [Scripts](#scripts)
  - [Services](#services)
  - [Tests](#tests)

# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

See instructions from main [README](../README.md#node-with-nvm) to setup node with nvm

## Install packages

To install packages, run with:

```bash
yarn ci
```

# Test

To run all tests:

```bash
yarn test
```

## Run specific tests

You can run a specific test by passing a test file or folder to the test script ie `yarn test $ANY_TEST_DIRECTORY_OR_FILENAME`.

If you have a test structure like:

```
|-- test
|   |-- scenario1
|       |-- file-1a.test.ts
|       |-- file-1b.test.ts
|   |-- scenario2
|       |-- file-2a.test.ts
```

```bash
# running test script passing a directory
yarn test test/scenario1
# will run file-1a and file-1b tests

# running test-file script passing a file
yarn test test/scenario2/file-2a.test.ts
# will run file-2a test
```

## Run specific tests using grep

You can run a specific test by using the grep option of the test framework. You can specify any string from the describe, context, it blocks of the tests in the format of `yarn test-grep $ANY_STRING_FROM_TEST_BLOCKS` eg:

```bash
# if you have a describe block with a string 'Sample test'
yarn test-grep Sample
```

## Run tests in parallel

Jest runs tests in parallel by default. You can however specify the number of processes to run tests in parallel with

```bash
yarn test --maxWorkers=2
```

or run tests in series.

```bash
yarn test -i
```

## Watch a test file

You can have a test or sets of tests to automatically rerun after saving your changes by providing a directory, file or list of both to the watch option.

```bash
yarn test-watch tests/blog-posts/delete.test.ts
```

## Test tagging

We can use the concept of tagging our tests so we can run a select group of tests across the whole test suite. A scenario could be for running smoke tests across all our services.

If we have a smoke test file for each service under test and there are numbers of them; we can tag the describe block of that smoke test file with @smoke and use the test-grep script to run tests that matches this keywork @smoke. eg:

```bash
# this will only run tests where @smoke is in the describe or test string
yarn test-grep @smoke
```

# Lint and Format

Formatting and linting of source files are enforced by [eslint](https://eslint.org/docs/about/) and [prettier](https://prettier.io/).

Most editors can integrate directly with these tools, so that files will be checked and formatted.

> On install of local dependencies `yarn install`, a git pre-commit hook will be added from [githooks](scripts/githooks/pre-commit).
> This will run steps similar to `yarn lint` for the files to be committed.

> **WARNING**: You can add **--no-verify** on your git commit to bypass the pre-commit hook... If you don't use it, that will be the end of it. I will not look for you, I will not pursue you... but if you do, I will look for you, I will find you... and I will kill you.

Before then, the IDE will highlight issues and errors based on rules that were set in [.eslintrc.js](.eslintrc.js) to be fixed, see eslint [rules](https://eslint.org/docs/rules/). Here are the npm scripts to lint and check formatting:

- `yarn lint` - see if there are linting issues and what files are not formatted correctly.
- `yarn lint-fix` - try to fix fixable eslint errors and re-format files in place according to the prettier rules.

# Structure

```
.
|-- test
|   |-- artifacts
|       |-- reports
|           |--report_20420908_121213.html
|   |-- config
|       |-- config.ts
|   |-- constants
|   |-- scripts
|   |-- services
|       |-- sample-api-service
|           |-- api-endpoints.ts
|           |-- api-endpoints-helper.ts
|           |-- index.ts
|       |-- aws-utility-service
|           |-- aws.ts
|   |-- tests
|       |-- scenario-group
|           |-- group-1
|               |-- group-1.test.ts
|               |-- group-1a.test.ts
|           |-- group-2
|               |-- group-2.test.ts
|               |-- group-2a.test.ts
|-- package.json
|-- *config.json
```

## Artifacts

- Have all test artifacts save here ie test result reports, error screenshots and logs.

## Config

- All test related configurations should live here. Do not confuse with configs for node packages and dependencies like eslint, mocha configs on the main directory.

## Constants

- Contains constants to use for test and function arguments.
- **Example** http response status codes.

## Scripts

- Any scripts we need to run adjacent to our test suite like hooks or running build pipelines.
- Exceptions could be when a build tool requires their scripts on a specific directory eg: github actions requires them to be on a .github directory from the main directory.

## Services

- All services under test and utilities for the test suite are here. If you need to get data from a web service or a configuration or secret from a key store, create a service folder for that resource or purpose here.
- **Example** if you want to read a json file from aws s3, create an aws utility folder here and have an s3.ts file that contains methods for getting files from s3 etc.

```
|-- services
|   |-- aws
|       |-- s3.ts
|   |-- kafka
|       |-- kafka.ts
|   |-- blog-post
|       |-- blog-post.ts
|       |-- blog-post-helper.ts
|       |-- index.ts
```

- **index.ts** - Use index to export all files from a directory so there's not much clutter from the import statements when importing a few classes or methods from files spread inside the directory eg:

```
|-- services
|   |-- blog-post
|       |-- blog-post.ts
|       |-- blog-post-helper.ts
|       |-- index.ts
```

```javascript
// blog-post.ts

export const blogPostFunction = () => {
  console.log('hello from blog post function');
};
```

```javascript
// blog-post-helper.ts

export const blogPostFunctionHelper = () => {
  console.log('hello from blog post function helper');
};
```

```javascript
// index.ts

export * from './blog-post';
export * from './blog-post-helper';
```

```javascript
// file.test.ts

import { blogPostFunction, blogPostFunctionHelper } from './services/blog-post';
```

## Tests

- All tests for your application are here. Suffix the test files with .test.ts. Try grouping them by logical parts of the application or service.

```
|-- tests
|   |-- blog-posts
|       |-- add-update.test.ts
|       |-- delete.test.ts
|       |-- get.test.ts
```
