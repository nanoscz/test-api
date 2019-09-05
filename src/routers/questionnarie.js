'use strict'

const controllers = require('../controllers')

const express = require('express')
const router = express.Router()
const questionnaireController = new controllers.QuestionnaireController()

router
  .route('/')
  .post(questionnaireController.create)

router
  .route('/:test')
  .get(questionnaireController.findByTest)

module.exports = router