'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    twitter: DataTypes.STRING,
    homepage: DataTypes.STRING,
    git: DataTypes.STRING,
    upVotes: DataTypes.INTEGER,
    downVotes: DataTypes.INTEGER,
    isDeveloper: DataTypes.BOOLEAN,
    isVerified: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN,
    isSuspended: DataTypes.BOOLEAN,
    rating: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
      // status: {type: Sequelize.ENUM('active','inactive') },
      type: {type: DataTypes.ENUM('admin','mod','normal','guest') },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.App)
        // User.belongsTo(models.Task)
      }
    }
  });
  return User;
};