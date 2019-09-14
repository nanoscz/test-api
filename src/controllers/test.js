'use strict'

const Test = require('../../models').test

class TestController {
  findAll (req, res, next) {
    Test.findAll()
      .then(tests => res.json(tests))
      .catch(err => next(err))
  }

  findUuid (req, res, next) {
    Test.findOne({ where: { uuid: req.params.uuid } })
      .then(test => res.json(test))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    const test = {
      name: body.name,
      type: body.type,
      userId: body.user_id
    }
    Test.findOrCreate({ where: { name: test.name }, defaults: test })
      .then(test => res.status(201).json(test))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Test.update(body, { where: { uuid: req.params.uuid } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Test.destroy({ where: { uuid: req.params.uuid } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }
}

module.exports = TestController
