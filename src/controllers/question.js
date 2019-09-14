'use strict'

const Question = require('../../models').question
const Answer = require('../../models').answer

class QuestionController {
  findAll (req, res, next) {
    Question.findAll()
      .then(questions => res.json(questions))
      .catch(err => next(err))
  }

  findUuid (req, res, next) {
    const uuid = req.params.uuid
    Question.findOne({ where: { uuid: uuid } })
      .then(question => res.json(question))
      .catch(err => next(err))
  }

  findByQuestion (req, res, next) {
    Question.findOne({ where: { uuid: req.params.uuid } })
      .then((question) => {
        Answer.findAll({ where: { questionId: question.id } })
          .then((answers) => res.json(answers))
          .catch((err) => next(err))
      })
      .catch((err) => next(err))
  }

  create (req, res, next) {
    const body = req.body
    Question.create({
      query: body.query,
      multiple: body.multiple,
      answers: JSON.parse(body.answers)
    }, {
      include: Answer
    }).then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Question.update(body, { where: { uuid: req.params.uuid } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Question.destroy({ where: { uuid: req.params.uuid } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }
}

module.exports = QuestionController
