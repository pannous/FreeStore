'use strict';
var models = require("../models/index.js")
// sequelize db:migrate:undo:all or move mv data.sqlite3 data.sqlite3.old
// sequelize db:migrate
// sequelize db:seed:all
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(models.User.tableName, models.User.attributes);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};