'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',  // Foreign key references categories table
          key: 'id',
        },
        onDelete: 'CASCADE',  // Optional: Define behavior on delete
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',  // Foreign key references categories table
          key: 'id',
        },
        onDelete: 'CASCADE',  // Optional: Define behavior on delete
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),  // For Postgres
        allowNull: true,
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: false,
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
        field: 'update_by',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};