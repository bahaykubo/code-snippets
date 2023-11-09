export class DBDataBuilder {
  /**
   * Generate a list of random customers
   *
   * @static
   *
   * @param {number} numberOfCustomers
   *
   * @returns {import('./models/customers').CustomerAttributes[]}
   */
  static generateCustomerList(numberOfCustomers) {
    const customers = [];
    for (let number = 0; number < numberOfCustomers; number++) {
      customers.push({
        first_name: 'bing', // use the StringUtils random gneerator here
        last_name: 'bong',
      });
    }
    return customers;
  }
}
