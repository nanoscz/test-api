'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    }
  }, {});
  test.associate = function (models) {
    // associations can be defined here
    test.belongsToMany(models.question, { through: 'testQuestions', foreignKey: 'testId' })
  };
  return test;
};