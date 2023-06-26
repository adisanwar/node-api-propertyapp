'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association with Karyawan model
      Users.belongsTo(models.Karyawan, { foreignKey: 'id_karyawan' });
    }
  }
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    id_karyawan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return Users;
};