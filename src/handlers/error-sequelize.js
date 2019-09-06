'use strict'

module.exports = function errorSequelize (err, req, res, next) {
  const payload = {
    error: {
      name: err.name,
      internalMessage: err.parent.sqlMessage
    }
  }
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
      payload.error.message = 'The number of ci has already been registered.'
      res.json(payload)
      break
    case 'SequelizeDatabaseError':
      payload.error.message = 'The type is not valid.'
      res.json(payload)
      break
    default:
      next(err)
      break
  }
}
