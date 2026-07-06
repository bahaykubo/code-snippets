import { DataTypes, Sequelize } from 'sequelize';

export type CustomerAttributes = {
  first_name: string;
  last_name?: string;
};

/**
 * Customer model
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Customers = (db: Sequelize) => {
  // match this definition to db schema we need to use
  // see https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
  return db.define('customers', {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
  });
};
