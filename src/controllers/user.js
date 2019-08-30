'use strict'

const User = require('../../models').user
const uuidv1 = require('uuid/v1')

class UserController {
  findAll (req, res, next) {
    User.findAll()
      .then(users => {
        res.json(users)
      })
      .catch(err => next(err))
  }

  findUuid (req, res, next) {
    const uuid = req.params.uuid
    User.findOne({
      where: { uuid: uuid }
    }).then(users => {
      res.json(users)
    })
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    body.token = uuidv1()
    body.uuid = uuidv1()
    User.create({
      username: body.username,
      fullname: body.fullname,
      password: body.password,
      email: body.email,
      token: body.token,
      uuid: body.uuid
    })
      .then(() => {
        res.status(201).end()
      })
      .catch(err => next(err))
  }

  update (req, res, next) {
    const uuid = req.params.uuid
    const body = req.body
    User.update(body, {
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
    User.destroy({ where: { uuid: uuid } })
      .then(() => {
        res.status(200).end()
      })
      .catch(err => next(err))
  }
}

module.exports = UserController
