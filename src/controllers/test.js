'use strict'

const Test = require('../../models').test
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TestController {
  findAll (req, res, next) {
    const condition = {}
    if (Object.keys(req.query).length) {
      const name = req.query.name
      const description = req.query.description
      condition.where = {
        [Op.or]: [{
          name: {
            [Op.like]: `%${name}%`
          }
        },
        {
          description: {
            [Op.like]: `%${description}%`
          }
        }]
      }
      if (req.query.range) {
        const range = req.query.range.split('-')
        condition.offset = parseInt(range[0], 10)
        condition.limit = parseInt(range[1], 10)
      }
    }
    Test.count(condition)
      .then(count => {
        Test.findAll(condition)
          .then(tests => {
            const range = `${req.query.range}/${count}`
            res.status(206)
            res.append('Content-Range', range)
            res.json({ tests, count })
          })
          .catch(err => next(err))
      })
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
