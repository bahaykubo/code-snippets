import { CustomerAttributes } from './models/customers';

export class DBDataBuilder {
  /**
   * Generate a list of random customers
   */
  static generateCustomerList(numberOfCustomers: number): CustomerAttributes[] {
    const customers: CustomerAttributes[] = [];
    for (let number = 0; number < numberOfCustomers; number++) {
      customers.push({
        first_name: 'bing', // use the StringUtils random gneerator here
        last_name: 'bong',
      });
    }
    return customers;
  }
}
