
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      categoryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field:'category_id'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'category_name', 
      },
      createdDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_date',  
      },
      updatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_date',  
      },
      createdBy: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'created_by',  
      },
      updatedBy: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'updated_by',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
