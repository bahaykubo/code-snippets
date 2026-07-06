import { Sequelize } from 'sequelize';
import { CustomerAttributes, Customers } from './models/customers';
import { Config } from '@config/config';

export class DBClient {
  #db: Sequelize;

  /**
   * Kafka Bridge Database client.
   *
   * @param uri - Set the database uri connection. Default to Config.postgresURI
   */
  constructor(uri?: string) {
    this.#db = new Sequelize(uri ?? Config.postgresURI, { logging: Config.sequelize.logging });
  }

  /**
   * Add a list of customer(s)
   */
  async addCustomers(customers: CustomerAttributes[]): Promise<void> {
    await Customers(this.#db).bulkCreate(customers);
  }

  /**
   * Get a list of customers
   */
  async getCustomers(): Promise<CustomerAttributes[]> {
    return (await Customers(this.#db).findAll({ raw: true })) as unknown as CustomerAttributes[];
  }

  async closeConnection(): Promise<void> {
    await this.#db.close();
  }
}
