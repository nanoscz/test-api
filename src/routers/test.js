'use strict'

const controllers = require('../controllers')

const express = require('express')
const router = express.Router()
const testController = new controllers.TestController()

router
  .route('/')
  .get(testController.findAll)
  .post(testController.create)

router
  .route('/:uuid')
  .get(testController.findUuid)
  .patch(testController.update)
  .delete(testController.delete)

module.exports = router
