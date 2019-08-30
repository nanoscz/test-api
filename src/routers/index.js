'use strict'

const userRouters = require('./user')

const express = require('express')
const api = express.Router()

api.use('/users/', userRouters)

module.exports = api
