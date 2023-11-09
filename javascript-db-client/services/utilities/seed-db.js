import { Config } from '@config/config';
import { Customers } from '@services/db/models';
import { Sequelize } from 'sequelize';

console.log(`connection details -> ${Config.postgresURI}`);
const db = new Sequelize(Config.postgresURI);

Customers(db).sync();
