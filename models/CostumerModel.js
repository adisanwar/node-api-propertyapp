import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const { datatype } = Sequelize;

const Users = db.define ('users', {
    nama : {
        type: DataTypes.STRING
    },
    email : {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    refresh_token : {
        type: DataTypes.TEXT
    },
    
   
}, {
    
    freezeTableName : true
});

export default Users;

// edit dulu bos