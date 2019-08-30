'use strict'

module.exports = function notFound (req, res, next) {
  if (!req.route) {
    return next(new Error('not found'))
  }
  next()
}
