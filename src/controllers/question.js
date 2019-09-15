'use strict'

const Question = require('../../models').question
const Answer = require('../../models').answer

class QuestionController {
  findAll (req, res, next) {
    Question.findAll()
      .then(questions => res.json(questions))
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Question.findOne({ where: { id: req.params.id } })
      .then(question => res.json(question))
      .catch(err => next(err))
  }

  findByAnswers (req, res, next) {
    Answer.findAll({ where: { questionId: req.params.id } })
      .then((answers) => res.json(answers))
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
    }).then((question) => res.status(201).json({
      id: question.id
    }))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Question.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Question.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = QuestionController
