'use strict'

const userRouters = require('./user')
const questionRouters = require('./question')
const answerRouters = require('./answer')

const express = require('express')
const api = express.Router()

api.use('/users/', userRouters)
api.use('/questions/', questionRouters)
api.use('/answers/', answerRouters)

module.exports = api
