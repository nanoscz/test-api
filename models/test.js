'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    }
  }, {
    defaultScope: {
      attributes: { exclude: ['userId'] }
    }
  });
  test.associate = function (models) {
    // associations can be defined here
    test.belongsTo(models.user)
    test.belongsToMany(models.question, { through: 'testQuestions', foreignKey: 'testId' })
  };
  return test;
};