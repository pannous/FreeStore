'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [
        {name: 'Admin', isDeveloper: true,createdAt: new Date(), updatedAt: new Date() }
      ], x=>console.log(x));
  },

  down: function (queryInterface, Sequelize) {
      // return queryInterface.bulkDelete('Person', null, {});
  }
};
