# Kafka Client in Typescript

This kafka client runs on nodejs with [kafkajs](https://www.npmjs.com/package/kafkajs).

- [Kafka Client in Typescript](#kafka-client-in-typescript)
- [Setup](#setup)
  - [Install packages](#install-packages)
- [Main app](#main-app)
  - [Run local kafka instance](#run-local-kafka-instance)
- [Utilities](#utilities)
- [Test](#test)

# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

See instructions from main [README](../README.md#node-with-nvm) to setup node with nvm

## Install packages

To install packages, run with:

```bash
yarn ci
```

# Main app

The kafka producer and consumer clients are on [./app/kafka](./app/kafka/).

There is an [example test](./test/kafka.test.ts) that uses these two clients.

## Run local kafka instance

The sample tests uses a local instance of kafka.

You can start these by running the start script in [./script/start.sh](./script/start.sh). 

Kakfa is then accessible from `loclahost:29092`. This is the default broker url set from the [config](./app/config.ts).

# Utilities

If there are any functions that are shared across the app, add them to the [utilities](./app/utilities/) directory. 

When you add a utility, add and export it from the [index file](./app/utilities/index.ts) so it can be imported directly from `utilities`.

# Test

Run the kafka test by running the script:

```bash
yarn test tests/kafka.test.ts
```
