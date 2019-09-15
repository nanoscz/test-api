'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    query: DataTypes.STRING,
    multiple: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {});
  question.associate = function(models) {
    // associations can be defined here
    question.hasMany(models.answer)
    question.belongsToMany(models.test, { through: 'testQuestions', foreignKey: 'questionId'})
  };
  return question;
};