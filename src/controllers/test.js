'use strict'

const Test = require('../../models').test

class TestController {
  findAll (req, res, next) {
    Test.findAll()
      .then(tests => res.json(tests))
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Test.findOne({ where: { id: req.params.id } })
      .then(test => res.json(test))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    const test = {
      name: body.name,
      type: body.type,
      description: body.description,
      userId: body.user_id
    }
    Test.findOrCreate({ where: { name: test.name }, defaults: test })
      .then((test) => res.status(201).json(test))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Test.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Test.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = TestController
