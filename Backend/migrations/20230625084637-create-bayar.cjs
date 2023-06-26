'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_bayar', {
      id_bayar: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_siteplan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_siteplan',
          key: 'id_siteplan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      harga: {
        type: Sequelize.INTEGER
      },
      jumlah_bayar: {
        type: Sequelize.INTEGER
      },
      sudah_bayar: {
        type: Sequelize.INTEGER
      },
      sisa_bayar: {
        type: Sequelize.INTEGER
      },
      tanggal_bayar: {
        type: Sequelize.DATE
      },
      bayar_berikutnya: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tbl_bayar');
  }
};
