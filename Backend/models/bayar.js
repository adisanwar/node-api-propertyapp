'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bayar extends Model {
    static associate(models) {
      Bayar.belongsTo(models.Siteplan, {
        foreignKey: 'id_siteplan',
        as: 'siteplan'
      });
    }
  }
  Bayar.init({
    id_siteplan: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    jumlah_bayar: DataTypes.INTEGER,
    sudah_bayar: DataTypes.INTEGER,
    sisa_bayar: DataTypes.INTEGER,
    tanggal_bayar: DataTypes.DATE,
    bayar_berikutnya: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bayar',
  });
  return Bayar;
};
