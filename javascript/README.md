- [Setup](#setup)
  - [Install packages](#install-packages)
- [Run](#run)
- [Test](#test)


# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

See instructions from main [README](../README.md#node-with-nvm) to setup node with nvm

## Install packages

To install packages, run with:

```bash
yarn ci
```

# Run

To run a script, run with:

```bash
yarn node snippets/date-with-dayjs.js
```

# Test

Using [mocha](https://mochajs.org/) to run the tests and [chai](https://www.chaijs.com/) for performing assertions, run with:

```bash
yarn test tests/array-filter.test.js
```
