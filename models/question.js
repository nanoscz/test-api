'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    query: DataTypes.STRING,
    multiple: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {});
  question.associate = function(models) {
    // associations can be defined here
    question.hasMany(models.answer)
  };
  return question;
};