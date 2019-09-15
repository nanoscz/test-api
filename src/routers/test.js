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
  .route('/:id')
  .get(testController.findOne)
  .patch(testController.update)
  .delete(testController.delete)

module.exports = router
