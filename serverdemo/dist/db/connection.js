"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('almacen', 'root', 'myMiguel22.SQL$', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
exports.default = sequelize;
