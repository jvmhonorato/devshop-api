import { DataSource } from "typeorm";

require('dotenv').config()

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWD,
    database: 'devshop',
    synchronize: false,
    logging: true,
    "entities": [
        "src/**/*.entity.ts"
    ],
    "migrations": [
         "typeorm/migrations/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
  });
  
  export default AppDataSource;