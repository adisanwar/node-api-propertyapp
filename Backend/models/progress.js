'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    static associate(models) {
      Progress.belongsTo(models.Prospek, {
        foreignKey: 'id_prospek',
        as: 'prospek'
      });
    }
  }
  Progress.init({
    id_prospek: DataTypes.INTEGER,
    pondasi: DataTypes.INTEGER,
    dinding: DataTypes.INTEGER,
    plaster: DataTypes.INTEGER,
    atapbajaring: DataTypes.INTEGER,
    genteng: DataTypes.INTEGER,
    keramik: DataTypes.INTEGER,
    kusen: DataTypes.INTEGER,
    finishing: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};
