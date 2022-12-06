"use strict";
exports.__esModule = true;
var typeorm_1 = require("typeorm");
require('dotenv').config();
var AppDataSource = new typeorm_1.DataSource({
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
    ]
});
exports["default"] = AppDataSource;
