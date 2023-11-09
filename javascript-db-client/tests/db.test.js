import { DBClient, DBDataBuilder, DBClientPG } from '@services/db';
import { expect } from 'chai';

describe('DB Client', function () {
  describe('Using Sequelize ORM', function () {
    const dbClient = new DBClient();

    after('Close db connection', async function () {
      await dbClient.closeConnection();
    });

    it('Should add new customers to db', async function () {
      const newCustomers = DBDataBuilder.generateCustomerList(10);
      await dbClient.addCustomers(newCustomers);

      const allCustomers = await dbClient.getCustomers();
      allCustomers.forEach((customer) => {
        expect(customer).to.include.keys(['first_name', 'last_name']);
      });
    });
  });

  describe('Using PG client', function () {
    const dbClient = new DBClientPG();

    before('Connect client to db', async function () {
      await dbClient.connect();
    });

    after('Close db connection', async function () {
      await dbClient.closeConnection();
    });

    it('Should add new customers to db', async function () {
      const newCustomers = DBDataBuilder.generateCustomerList(10);
      console.log(newCustomers);
      await dbClient.addCustomers(newCustomers);

      const allCustomers = await dbClient.getCustomers();
      console.log(allCustomers);
      allCustomers.forEach((customer) => {
        expect(customer).to.include.keys(['first_name', 'last_name']);
      });
    });
  });
});
