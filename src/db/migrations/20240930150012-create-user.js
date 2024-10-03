'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        field:'first_name',
        allowNull:false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'last_name',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'email_address',
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'mobile_number',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password',
      },
      emailVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'email_verified',        
      },
      mobileVerified: {
        type: Sequelize.STRING,
        defaultValue: false,
        field: 'mobile_verified',        
      },
      college: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'college_name',        
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};