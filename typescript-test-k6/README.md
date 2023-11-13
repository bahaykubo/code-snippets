# Performance testing with k6

- [Performance testing with k6](#performance-testing-with-k6)
  - [Setup](#setup)
  - [Test](#test)
    - [Run tests locally](#run-tests-locally)
    - [Run tests from container](#run-tests-from-container)

## Setup

You can run these tests using a container. If you want to run k6 locally, run the [`install-k6.sh`](./scripts/install-k6.sh) script to install k6.

## Test

k6 imports lack support for node module resolution so we will use a bundler, webpack, to transform our tests to be runnable in k6.

To run a test file, the file needs to be bundled first and output on the [`dist`](./dist) directory. The test files in this directory is what we need to run in k6.

### Run tests locally

There is an npm script `test-local` that will perform these two steps for us. All we need need to pass is the test file, **from the dist** directory to this script.

So if you have a test file called `sample.test.ts` in the `tests` directory, run the command will look like:

```bash
npm run test-local dist/sample.test.ts
```

### Run tests from container

The npm script `test` will run a specific test in a container using docker compose. Update the compose file k6 service command with the test you want to run. This is already configured to be able to call services that is running locally in another container or network.
