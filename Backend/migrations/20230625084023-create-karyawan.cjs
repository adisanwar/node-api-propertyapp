'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_karyawan', {
      id_karyawan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_karyawan: {
        type: Sequelize.STRING
      },
      email_karyawan: {
        type: Sequelize.STRING
      },
      alamat_karyawan: {
        type: Sequelize.STRING
      },
      no_hp: {
        type: Sequelize.INTEGER
      },
      bagian: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tbl_karyawan');
  }
};