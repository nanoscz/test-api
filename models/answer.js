'use strict';
module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    text: DataTypes.STRING,
    points: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    questionId: { 
      type: DataTypes.INTEGER,
      field: 'question_id'
    }
  }, {});
  answer.associate = function(models) {
    // associations can be defined here
    answer.belongsTo(models.question)
  };
  return answer;
};