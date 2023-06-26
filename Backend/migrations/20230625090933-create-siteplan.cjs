'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Siteplans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_costumer: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_costumer',
          key: 'id_costumer'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      proyek: {
        type: Sequelize.STRING
      },
      cluster: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      tipe: {
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
    await queryInterface.dropTable('Siteplans');
  }
};