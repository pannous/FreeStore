'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Apps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      download_url: {
        type: Sequelize.STRING
      },
      developer: {
        type: Sequelize.STRING
      },
      homepage: {
        type: Sequelize.STRING
      },
      git: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INT
      },
      price: {
        type: Sequelize.STRING
      },
      price_cents: {
        type: Sequelize.INT
      },
      status: {
        type: Sequelize.INTEGER
      },
      downloads: {
        type: Sequelize.INTEGER
      },
      views: {
        type: Sequelize.INTEGER
      },
      isFree: {
        type: Sequelize.BOOLEAN
      },
      isTrial: {
        type: Sequelize.BOOLEAN
      },
      hasInAppPurchases: {
        type: Sequelize.BOOLEAN
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Apps');
  }
};