'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email_address: 'john.doe@example.com',
        mobile_number: '1234567890',
        password: 'hashed_password_1', // Ensure to hash your password
        email_verified: true,
        mobile_verified: true,
        college_name: 'University A',
        created_date: new Date(),
        updated_date: new Date(),
        created_by: 1,
        updated_by: 1,
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        email_address: 'jane.smith@example.com',
        mobile_number: '0987654321',
        password: 'hashed_password_2',
        email_verified: false,
        mobile_verified: false,
        college_name: 'University B',
        created_date: new Date(),
        updated_date: new Date(),
        created_by: 1,
        updated_by: 1,
      },
      {
        first_name: 'Alice',
        last_name: 'Johnson',
        email_address: 'alice.johnson@example.com',
        mobile_number: '1112223333',
        password: 'hashed_password_3',
        email_verified: true,
        mobile_verified: true,
        college_name: 'University C',
        created_date: new Date(),
        updated_date: new Date(),
        created_by: 1,
        updated_by: 1,
      },
      {
        first_name: 'Bob',
        last_name: 'Brown',
        email_address: 'bob.brown@example.com',
        mobile_number: '4445556666',
        password: 'hashed_password_4',
        email_verified: false,
        mobile_verified: false,
        college_name: 'University D',
        created_date: new Date(),
        updated_date: new Date(),
        created_by: 1,
        updated_by: 1,
      },
      {
        first_name: 'Charlie',
        last_name: 'Davis',
        email_address: 'charlie.davis@example.com',
        mobile_number: '7778889999',
        password: 'hashed_password_5',
        email_verified: true,
        mobile_verified: true,
        college_name: 'University E',
        created_date: new Date(),
        updated_date: new Date(),
        created_by: 1,
        updated_by: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
