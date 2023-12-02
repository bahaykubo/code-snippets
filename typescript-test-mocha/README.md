<h1>Test with Mocha and Chai in Typescript</h1>

- [Setup](#setup)
  - [Install packages](#install-packages)
- [Test](#test)
  - [Testing arrays and objects](#testing-arrays-and-objects)
  - [Run in parallel](#run-in-parallel)
  - [Run tagged tests using grep](#run-tagged-tests-using-grep)

# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

See instructions from main [README](../README.md#node-with-nvm) to setup node with nvm

## Install packages

To install packages, run with:

```bash
yarn ci
```

# Test

## [Testing arrays and objects](https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d)

Using [mocha](https://mochajs.org/) to run the tests and [chai](https://www.chaijs.com/) for performing assertions, run with:

```bash
yarn test tests
```

## Run in parallel

```bash
yarn test tests --parallel
```

## Run tagged tests using grep

```bash
yarn test tests --grep grepthis
```
