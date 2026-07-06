// eslint-disable-next-line @typescript-eslint/naming-convention
export const Config = {
  postgresURI: 'postgresql://user:userpass@localhost:6432/postgres',
  postgresClient: {
    user: 'user',
    host: 'localhost',
    database: 'postgres',
    password: 'userpass',
    port: 6432,
  },
  sequelize: {
    logging: false,
  },
};
