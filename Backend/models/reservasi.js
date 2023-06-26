'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservasi extends Model {
    static associate(models) {
      Reservasi.belongsTo(models.Prospek, {
        foreignKey: 'id_prospek',
        as: 'prospek'
      });
    }
  }
  Reservasi.init({
    id_prospek: DataTypes.INTEGER,
    nominal_reservasi: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservasi',
  });
  return Reservasi;
};
