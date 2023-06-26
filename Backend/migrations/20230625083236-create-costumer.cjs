'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_costumer', {
      id_costumer: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      no_ktp: {
        type: Sequelize.INTEGER
      },
      no_hp: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      npwp: {
        type: Sequelize.INTEGER
      },
      kota: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      deskripsi_kerja: {
        type: Sequelize.STRING
      },
      gaji: {
        type: Sequelize.INTEGER
      },
      timestamp:false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_costumer');
  }
};