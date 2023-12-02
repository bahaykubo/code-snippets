<h1>App Service</h1>

- [Main app](#main-app)
  - [Service routers](#service-routers)
  - [Data store](#data-store)
    - [Seed data](#seed-data)
  - [Middleware](#middleware)
  - [Utilities](#utilities)
  - [Test](#test)
    - [Send http requests to app](#send-http-requests-to-app)

This mock service runs on nodejs with [express](https://expressjs.com/) and [Nedb](https://www.npmjs.com/package/@seald-io/nedb) as a data store.

# Main app

The main app is in [./app/main.ts](./app/main.ts). This is where you can set app wide config, middleware and routes.

Although you can add routes from here directly. Use [routers](#service-routers) instead and add these to the express app.

## Service routers

Create a new express router for a new route instead of adding all routes and endpoints from the main express app. ie:

```typescript
// app.ts
import express from 'express';
import { sampleRouter } from './routes/sample';

const app = express();

app.use('/sample', sampleRouter);

app.listen(5250, () => {});
```

```typescript
// ./routes/sample
import express from 'express';

export const sampleRouter = express.Router();

sampleRouter.get('/', (req, res) => {
  res.status(200).send({ sample: 'router' });
});
```

## Data store

We use Nedb for data persistence. These are flat files and stores data as json objects. To use Nedb for a route or router, create a new Nedb instance. If you want the data to persist, specify the `.db` file and location.

> Set `autoload` to true so you don't have to call the `loadDatabase function for each db created.

```typescript
// ./routes/sample
import express from 'express';
import Nedb from '@seald-io/nedb';

export const sampleRouter = express.Router();

const sampleDB = new Nedb({ filename: 'data/sample.db', autoload: true });

sampleRouter.get('/', async (req, res) => {
  const data = await sampleDB.findAsync({}); // return all records from sampleDB
  res.status(200).send(data);
});
```

### Seed data

We populate db files so services can send back data on request. We do this by using a `refresh-data` script and running it with yarn by running the command `yarn refresh-data`.

This runs the [data-seed.ts](./app/utilities/data-seed.ts) file which will create `.db` files on the `/data` directory containing seed data.

> Update the `data-seed.ts` file with additional db instances and data for your service or route that expects some specific value to be returned from a test.

```typescript
import Nedb from '@seald-io/nedb';

const users = [
  {
    name: 'jim',
  },
  {
    name: 'bob',
  },
];

const usersDB = new Nedb({ filename: 'data/users.db', autoload: true });

const seedUsersDB = () => {
  users.forEach((user) => usersDB.insert(user));
};

const seedData = () => {
  seedUserDB();
  // Add functions for seeding any other db we need
};

seedData();
```

## Middleware

We can apply service-wide or route/request specific middleware to run any function or make changes to incoming request and response objects. ie [enabling cors for specific hosts/origin](https://expressjs.com/en/resources/middleware/cors.html)

```typescript
// app.ts
import express from 'express';
import cors from 'cors';
import { sampleRouter } from './routes/sample';

const app = express();

app.use(
  cors({
    origin: ['http://localhost', 'http://some-host-somewhere'],
  }),
);

app.use('/sample', sampleRouter);

app.listen(5250, () => {});
```

## Utilities

If there are any functions that are shared across the app, add them to the [utilities](./app/utilities/) directory. When you add a utility, add and export if from the [index file](./app/utilities/index.ts) so it can be imported from `utilities`.

## Test

To run the tests, we need to run a script that would start a container of the service first:

```bash
# start the service container
./scripts/docker/run.sh

# now we can run the tests
yarn test

# stop and remove the container when finished
./scripts/docker/stop.sh

```

### Send http requests to app

There is n .http file on [test directory](./test) that you can use to send http requests to the app. You would need the [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in vs code to use this.
