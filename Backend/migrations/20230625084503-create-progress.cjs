'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_progress', {
      id_progres: {
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
      pondasi: {
        type: Sequelize.INTEGER
      },
      dinding: {
        type: Sequelize.INTEGER
      },
      plaster: {
        type: Sequelize.INTEGER
      },
      atapbajaring: {
        type: Sequelize.INTEGER
      },
      genteng: {
        type: Sequelize.INTEGER
      },
      keramik: {
        type: Sequelize.INTEGER
      },
      kusen: {
        type: Sequelize.INTEGER
      },
      finishing: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('tbl_progress');
  }
};
