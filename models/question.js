'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    uuid: DataTypes.STRING,
    query: DataTypes.STRING,
    multiple: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {});
  question.associate = function(models) {
    // associations can be defined here
  };
  return question;
};