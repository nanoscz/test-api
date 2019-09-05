'use strict'

const userRouters = require('./user')
const questionRouters = require('./question')
const answerRouters = require('./answer')
const testRouters = require('./test')
const questionnaireRouters = require('./questionnarie')

const express = require('express')
const api = express.Router()

api.post('/login/', userRouters.login)
api.use('/users/', userRouters.router)
api.use('/questions/', questionRouters)
api.use('/answers/', answerRouters)
api.use('/tests/', testRouters)
api.use('/questionnaire/', questionnaireRouters)

module.exports = api
