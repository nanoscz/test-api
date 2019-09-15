'use strict'

const Answer = require('../../models').answer

class AnswerController {
  create (req, res, next) {
    const body = req.body
    const answer = {
      text: body.text,
      points: body.points,
      questionId: body.question_id
    }
    Answer.create(answer).then(() => res.status(201).end())
      .catch((err) => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Answer.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch((err) => next(err))
  }

  delete (req, res, next) {
    Answer.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch((err) => res.next(err))
  }
}

module.exports = AnswerController
