'use strict'

const userRouters = require('./user')
const questionRouters = require('./question')

const express = require('express')
const api = express.Router()

api.use('/users/', userRouters)
api.use('/questions/', questionRouters)

module.exports = api
