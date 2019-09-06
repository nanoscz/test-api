'use strict'

module.exports = function errorSequelize (err, req, res, next) {
  const error = {
    name: err.name,
    internalMessage: err.parent.sqlMessage
  }
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
      error.message = 'The number of ci has already been registered.'
      res.status(400).send(error)
      break
    case 'SequelizeDatabaseError':
      error.message = err
      res.status(400).send(error)
      break
    default:
      res.json(err)
      break
  }
}
