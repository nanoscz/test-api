'use strict'

const Questionnaire = require('../../models').questionnaire
const User = require('../../models').user
const Test = require('../../models').test
const Question = require('../../models').question

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

  findByTest (req, res, next) {
    Test.findOne({
      where: { uuid: req.params.test },
      attributes: {
        exclude: ['userId']
      },
      include: [{
        model: User,
        attributes: {
          exclude: ['id', 'token']
        }
      }]
    })
      .then(test => {
        delete test.dataValues.id
        Questionnaire.findAll({
          attributes: ['question.*'],
          include: [{
            model: Question,
            attributes: {
              exclude: ['id']
            }
          }]
        }).then((questionnaire) => {
          res.json({
            test,
            questionnaire
          })
        })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }
}

module.exports = QuestionnaireController
