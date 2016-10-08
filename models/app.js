'use strict';
module.exports = function(sequelize, DataTypes) {
  var App = sequelize.define('App', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    download_url: DataTypes.STRING,
    developer: DataTypes.STRING,
    homepage: DataTypes.STRING,
    git: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    price: DataTypes.STRING,
    price_cents: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    downloads: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    isFree: DataTypes.BOOLEAN,
    isTrial: DataTypes.BOOLEAN,
    hasInAppPurchases: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return App;
};