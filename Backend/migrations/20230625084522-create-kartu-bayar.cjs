'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_kartu_bayar', {
      id_kartu_bayar: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_prospek: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_prospek',
          key: 'id_prospek'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      form: {
        type: Sequelize.BOOLEAN
      },
      pasfoto: {
        type: Sequelize.BOOLEAN
      },
      ktp: {
        type: Sequelize.BOOLEAN
      },
      kartu_keluarga: {
        type: Sequelize.BOOLEAN
      },
      npwp: {
        type: Sequelize.BOOLEAN
      },
      npwp_siup: {
        type: Sequelize.BOOLEAN
      },
      surat_nikah: {
        type: Sequelize.BOOLEAN
      },
      aktif_kerja: {
        type: Sequelize.BOOLEAN
      },
      skTidakAdaRumah: {
        type: Sequelize.BOOLEAN
      },
      domisili: {
        type: Sequelize.BOOLEAN
      },
      pph21: {
        type: Sequelize.BOOLEAN
      },
      slipGaji: {
        type: Sequelize.BOOLEAN
      },
      skPengangkatan: {
        type: Sequelize.BOOLEAN
      },
      rekKoran: {
        type: Sequelize.BOOLEAN
      },
      jamsostek: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_kartu_bayar');
  }
};
