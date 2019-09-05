'use strict'

const controllers = require('../controllers')

const express = require('express')
const router = express.Router()
const userController = new controllers.UserController()

router
  .route('/')
  .get(userController.findAll)
  .post(userController.create)

router
  .route('/:uuid')
  .get(userController.findUuid)
  .patch(userController.update)
  .delete(userController.delete)

module.exports = {
  login: userController.login,
  router
}
