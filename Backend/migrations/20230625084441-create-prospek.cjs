'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_prospek', {
      id_prospek: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_karyawan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_karyawan',
          key: 'id_karyawan'
        }
      },
      id_siteplan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_siteplan',
          key: 'id_siteplan'
        }
      },
      id_costumer: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_costumers',
          key: 'id_costumers'
        }
      },
      sumber_info: {
        type: Sequelize.STRING
      },
      kontak_melalui: {
        type: Sequelize.STRING
      },
      status_prospek: {
        type: Sequelize.STRING
      },
      catatan: {
        type: Sequelize.STRING
      },
      referal: {
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

    // Add foreign key constraints
    await queryInterface.addConstraint('tbl_prospek', {
      fields: ['id_karyawan'],
      type: 'foreign key',
      name: 'fk_tbl_prospek_tbl_karyawan',
      references: {
        table: 'tbl_karyawan',
        field: 'id_karyawan'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('tbl_prospek', {
      fields: ['id_siteplan'],
      type: 'foreign key',
      name: 'fk_tbl_prospek_tbl_siteplan',
      references: {
        table: 'tbl_siteplan',
        field: 'id_siteplan'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('tbl_prospek', {
      fields: ['id_costumer'],
      type: 'foreign key',
      name: 'fk_tbl_prospek_tbl_costumers',
      references: {
        table: 'tbl_costumers',
        field: 'id_costumers'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_prospek');
  }
};
