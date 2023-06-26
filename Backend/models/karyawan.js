'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association with User model
      Karyawan.hasOne(models.User, { foreignKey: 'id_karyawan' });
    }
  }
  Karyawan.init({
    nama_karyawan: DataTypes.STRING,
    email_karyawan: DataTypes.STRING,
    alamat_karyawan: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    bagian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Karyawan',
  });
  return Karyawan;
};