// import { Sequelize } from "sequelize";
import Sequelize from "sequelize";

const db = new Sequelize('property_app', 'root', '',{
    host:"localhost",
    dialect: "mysql"
});

export default db;
