import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

const configKnex = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  debug: true,
};

export default knex(configKnex);
