'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Prospek extends Model {
    static associate(models) {
      // Define associations here
      Prospek.belongsTo(models.Karyawan, {
        foreignKey: 'id_karyawan'
      });

      Prospek.belongsTo(models.Siteplan, {
        foreignKey: 'id_siteplan'
      });

      Prospek.belongsTo(models.Costumer, {
        foreignKey: 'id_costumer'
      });
    }
  }

  Prospek.init({
    id_karyawan: DataTypes.INTEGER,
    id_siteplan: DataTypes.INTEGER,
    id_costumer: DataTypes.STRING,
    sumber_info: DataTypes.STRING,
    kontak_melalui: DataTypes.STRING,
    status_prospek: DataTypes.STRING,
    catatan: DataTypes.STRING,
    referal: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Prospek',
  });

  return Prospek;
};

