'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KartuBayar extends Model {
    static associate(models) {
      KartuBayar.belongsTo(models.Prospek, {
        foreignKey: 'id_prospek',
        as: 'prospek'
      });
    }
  }
  KartuBayar.init({
    id_prospek: DataTypes.INTEGER,
    form: DataTypes.BOOLEAN,
    pasfoto: DataTypes.BOOLEAN,
    ktp: DataTypes.BOOLEAN,
    kartu_keluarga: DataTypes.BOOLEAN,
    npwp: DataTypes.BOOLEAN,
    npwp_siup: DataTypes.BOOLEAN,
    surat_nikah: DataTypes.BOOLEAN,
    aktif_kerja: DataTypes.BOOLEAN,
    skTidakAdaRumah: DataTypes.BOOLEAN,
    domisili: DataTypes.BOOLEAN,
    pph21: DataTypes.BOOLEAN,
    slipGaji: DataTypes.BOOLEAN,
    skPengangkatan: DataTypes.BOOLEAN,
    rekKoran: DataTypes.BOOLEAN,
    jamsostek: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'KartuBayar',
  });
  return KartuBayar;
};
