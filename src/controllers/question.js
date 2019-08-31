'use strict'

const Question = require('../../models').question
const uuidv1 = require('uuid/v1')

class QuestionController {
  findAll (req, res, next) {
    Question.findAll()
      .then(questions => {
        res.json(questions)
      })
      .catch(err => next(err))
  }

  findUuid (req, res, next) {
    const uuid = req.params.uuid
    Question.findOne({
      where: { uuid: uuid }
    }).then(question => {
      res.json(question)
    })
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    body.uuid = uuidv1()
    Question.create({
      uuid: body.uuid,
      query: body.query,
      multiple: body.multiple,
      status: body.status
    })
      .then(() => {
        res.status(201).end()
      })
      .catch(err => next(err))
  }

  update (req, res, next) {
    const uuid = req.params.uuid
    const body = req.body
    Question.update(body, {
      where: {
        uuid: uuid
      }
    })
      .then(() => {
        res.status(200).end()
      })
      .catch(err => next(err))
  }

  delete (req, res, next) {
    const uuid = req.params.uuid
    Question.destroy({ where: { uuid: uuid } })
      .then(() => {
        res.status(200).end()
      })
      .catch(err => next(err))
  }
}

module.exports = QuestionController
