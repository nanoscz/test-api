'use strict'

const User = require('../../models').user
const uuidv1 = require('uuid/v1')
class UserController {
  findAll (req, res, next) {
    User.findAll()
      .then(users => res.json(users))
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    User.findOne({ where: { id: req.params.id } })
      .then(user => res.json(user))
      .catch(err => next(err))
  }

  login (req, res, next) {
    User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(user => {
      if (!user) {
        res.status(200).send()
      } else {
        res.json({
          user: {
            username: user.username,
            fullname: user.fullname,
            emial: user.emial,
            uuid: user.uuid,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
          },
          token: user.token
        })
      }
    })
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    body.token = uuidv1()
    User.create(body)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    User.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    User.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = UserController
