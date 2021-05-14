'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cities', [{
      name: 'Sarajevo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Istanbul',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Barcelona',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Los Angeles',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
