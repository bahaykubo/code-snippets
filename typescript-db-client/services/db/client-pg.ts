import { Client, ClientConfig } from 'pg';
import { CustomerAttributes } from './models/customers';
import { Config } from '@config/config';

export class DBClientPG {
  #client: Client;

  /**
   * Kafka Bridge Database client using PG.
   * We are using a client instead of a pool due to the nature of how we interact with the db
   *
   * @param connectionDetails - Set the client connection details. Default to Config.postgresClient
   */
  constructor(connectionDetails?: ClientConfig) {
    this.#client = new Client(connectionDetails ?? Config.postgresClient);
  }

  async connect(): Promise<void> {
    await this.#client.connect();
  }

  async closeConnection(): Promise<void> {
    await this.#client.end();
  }

  /**
   * Add a list of customer(s)
   */
  async addCustomers(customers: CustomerAttributes[]): Promise<void> {
    const customersString = this.#convertCustomerListToInsertString(customers);
    await this.#client
      .query(`INSERT INTO customers ("first_name", "last_name", "createdAt", "updatedAt") VALUES ${customersString}`)
      .catch((error) => {
        throw new Error(error);
      });
  }

  /**
   * Get a list of customers
   */
  async getCustomers(limit?: number): Promise<CustomerAttributes[]> {
    let queryLimit = '';

    if (limit || limit === 0) {
      queryLimit = `LIMIT ${limit}`;
    }

    return await this.#client
      .query(`SELECT * from customers ${queryLimit}`)
      .then((result) => result.rows)
      .catch((error) => {
        throw new Error(`Failed to get customers. ${error}`);
      });
  }

  /**
   * Convert Customer list to a string for inserting to customer table
   */
  #convertCustomerListToInsertString(customers: CustomerAttributes[]): string {
    return customers
      .map((customer) => {
        return `('${customer.first_name}', '${customer.last_name}', NOW(), NOW())`;
      })
      .join(',');
  }
}
