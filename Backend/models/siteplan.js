'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siteplan extends Model {
    static associate(models) {
      Siteplan.belongsTo(models.Costumer, {
        foreignKey: 'id_costumer',
        as: 'costumer'
      });
      Siteplan.hasMany(models.Progress, {
        foreignKey: 'id_siteplan',
        as: 'progress'
      });
      Siteplan.hasMany(models.Bayar, {
        foreignKey: 'id_siteplan',
        as: 'bayar'
      });
    }
  }
  Siteplan.init({
    id_costumer: DataTypes.INTEGER,
    proyek: DataTypes.STRING,
    cluster: DataTypes.STRING,
    unit: DataTypes.STRING,
    tipe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Siteplan',
  });
  return Siteplan;
};
