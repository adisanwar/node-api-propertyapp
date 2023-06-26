'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Legalitas extends Model {
    static associate(models) {
      Legalitas.belongsTo(models.Prospek, {
        foreignKey: 'id_prospek',
        as: 'prospek'
      });
    }
  }
  Legalitas.init({
    id_prospek: DataTypes.INTEGER,
    slf: DataTypes.BOOLEAN,
    ppjb: DataTypes.BOOLEAN,
    pbb: DataTypes.BOOLEAN,
    ajb: DataTypes.BOOLEAN,
    sertifikat: DataTypes.BOOLEAN,
    pbg: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Legalitas',
  });
  return Legalitas;
};
