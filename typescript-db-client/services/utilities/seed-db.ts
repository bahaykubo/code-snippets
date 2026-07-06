import { Config } from '@config/config';
import { Customers } from '@services/db/models';
import { Sequelize } from 'sequelize';

export const seedDB = async () => {
  console.log(`connection details -> ${Config.postgresURI}`);
  const db = new Sequelize(Config.postgresURI);

  await Customers(db).sync();
};

seedDB();
