'use strict'

const controllers = require('../controllers')

const express = require('express')
const router = express.Router()
const answerController = new controllers.AnswerController()

router
  .route('/')
  .post(answerController.create)

router
  .route('/:uuid')
  .patch(answerController.update)
  .delete(answerController.delete)

router
  .route('/:questionId')
  .get(answerController.findAll)

module.exports = router
