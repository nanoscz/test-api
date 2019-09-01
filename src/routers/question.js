'use strict'

const controllers = require('../controllers')

const express = require('express')
const router = express.Router()
const questionController = new controllers.QuestionController()

router
  .route('/')
  .get(questionController.findAll)
  .post(questionController.create)

router
  .route('/:uuid')
  .get(questionController.findUuid)
  .patch(questionController.update)
  .delete(questionController.delete)

router
  .route('/:uuid/answers')
  .get(questionController.findByQuestion)

module.exports = router
