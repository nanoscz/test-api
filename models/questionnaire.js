'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questionaire = sequelize.define('questionnaire', {
    testId: {
      type: DataTypes.INTEGER,
      field: 'test_id',
      primaryKey: true
    },
    questionId: {
      type: DataTypes.INTEGER,
      field: 'question_id',
      primaryKey: true
    }
  }, {
    tableName: 'questionnaires',
    freezeTableName: true
  });
  Questionaire.associate = function(models) {
    // associations can be defined here
    Questionaire.belongsTo(models.question)
    Questionaire.belongsTo(models.test)
  };
  return Questionaire;
};