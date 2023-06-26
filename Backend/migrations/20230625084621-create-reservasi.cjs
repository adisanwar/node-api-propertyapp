'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_reservasi', {
      id_reservasi: {
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
      nominal_reservasi: {
        type: Sequelize.INTEGER
      },
      keterangan: {
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
    await queryInterface.dropTable('tbl_reservasi');
  }
};
