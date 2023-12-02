<h1>MongoDB Client in Typescript</h1>

- [Setup](#setup)
  - [Install packages](#install-packages)
- [Start MongoDB Server](#start-mongodb-server)
  - [Initialize MongoDB](#initialize-mongodb)
- [Test](#test)

# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

See instructions from main [README](../README.md#node-with-nvm) to setup node with nvm

## Install packages

To install packages, run with:

```bash
yarn ci
```

# Start MongoDB Server

Run the `start.sh` script from [./script](./script/) to start a mongodb container.

The test in this project is configured to communicate with this container. See [mongodb client config](./app/config.ts).

## Initialize MongoDB

Configure mongodb to create store collection by runing the script:

```bash
yarn setup-data-store
```

# Test

Run the mongodb test by running the script:

```bash
yarn test tests/messenter-users.test.ts
```
