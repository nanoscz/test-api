'use strict'

const controllers = require('../controllers')

const express = require('express')
const router = express.Router()
const answerController = new controllers.AnswerController()

router
  .route('/')
  .post(answerController.create)

router
  .route('/:id')
  .patch(answerController.update)
  .delete(answerController.delete)

module.exports = router
