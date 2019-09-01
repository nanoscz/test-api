'use strict'

const User = require('../../models').user
const uuidv1 = require('uuid/v1')

class UserController {
  findAll (req, res, next) {
    User.findAll()
      .then(users => res.json(users))
      .catch(err => next(err))
  }

  findUuid (req, res, next) {
    User.findOne({ where: { uuid: req.params.uuid } })
      .then(user => res.json(user))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    const user = {
      username: body.username,
      fullname: body.fullname,
      password: body.password,
      email: body.email,
      token: body.token
    }
    body.token = uuidv1()
    User.create(user)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    User.update(body, { where: { uuid: req.params.uuid } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    User.destroy({ where: { uuid: req.params.uuid } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }
}

module.exports = UserController
