'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {
    defaultScope: {
      attributes: { exclude: ['password', 'token'] }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};