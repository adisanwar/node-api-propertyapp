'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_legalitas', {
      id_legalitas: {
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
      slf: {
        type: Sequelize.BOOLEAN
      },
      ppjb: {
        type: Sequelize.BOOLEAN
      },
      pbb: {
        type: Sequelize.BOOLEAN
      },
      ajb: {
        type: Sequelize.BOOLEAN
      },
      sertifikat: {
        type: Sequelize.BOOLEAN
      },
      pbg: {
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
    await queryInterface.dropTable('tbl_legalitas');
  }
};
