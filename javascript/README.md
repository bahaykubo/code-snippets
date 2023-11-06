- [Setup](#setup)


# Setup

Have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed. Use nvm to manage node.

## nvm

Install nvm to manage node

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# list available nodejs versions
nvm ls-remote

# install latest LTS version
nvm install --lts

# install yarn globally
npm install -g yarn

# check yarn working properly
yarn --version
```

### Options

#### Set memory use

Node has a default max memory use of less than 2GB. It's possible to set or increase this by setting the `max-old-space-size` option from `NODE_OPTIONS`.

To do this from the CLI when running your node app:

```bash
NODE_OPTIONS=--max-old-space-size=40996 npm run some-node-script
```

Or you can export this from your terminal:

```bash
echo 'export NODE_OPTIONS="--max-old-space-size=4096"' >> ~/.bashrc
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
