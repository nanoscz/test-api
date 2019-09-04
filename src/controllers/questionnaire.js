'use strict'

const Questionnaire = require('../../models').questionnaire

class QuestionnaireController {
  create (req, res, next) {
    let questionnaire = req.body.questionnaire
    questionnaire = JSON.parse(questionnaire)
    questionnaire = JSON.parse(questionnaire)
    Questionnaire.bulkCreate(questionnaire)
      .then((questionnaires) => {
        res.status(201).json({
          register: questionnaires.length
        })
      })
      .catch((err) => next(err))
  }
}

module.exports = QuestionnaireController
