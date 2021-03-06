'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      fullname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter your name.'
          }
        }
      },
      password: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      roles: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: 'ROLE_USER'
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ci: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      type: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['normal', 'google', 'facebook']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};