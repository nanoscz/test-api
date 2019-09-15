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
  .route('/:id')
  .get(questionController.findOne)
  .patch(questionController.update)
  .delete(questionController.delete)

router
  .route('/:id/answers')
  .get(questionController.findByAnswers)

module.exports = router
