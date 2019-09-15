'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    roles: DataTypes.STRING,
    token: DataTypes.STRING,
    ci: DataTypes.INTEGER,
    type: DataTypes.ENUM({
      values: ['normal', 'google', 'facebook']
    })
  }, {
      defaultScope: {
        attributes: { exclude: ['password'] }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.test)
  };
  return User;
};