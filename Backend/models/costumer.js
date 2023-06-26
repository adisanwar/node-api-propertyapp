'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Costumers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Costumers.init({
    nama: DataTypes.STRING,
    no_ktp: DataTypes.INTEGER,
    no_hp: DataTypes.INTEGER,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    npwp: DataTypes.INTEGER,
    kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    deskripsi_kerja: DataTypes.STRING,
    gaji: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Costumer',
  });
  return Costumers;
};