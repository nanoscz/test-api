'use strict'

const debug = require('debug')('some:api')
const morgan = require('morgan')
const http = require('http')
const express = require('express')
var cors = require('cors')
const compression = require('compression')
const bodyparser = require('body-parser')
const chalk = require('chalk')

const { notFound } = require('./src/handlers')

const nconf = require('nconf')
const settings = nconf.file({ file: 'config/config.json' })

const port = settings.get('settings').port || 80
const format = settings.get('settings').morgan || 'tiny'

const router = require('./src/routers')

const app = express()
const server = http.createServer(app)

app.use(morgan(format))
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(compression())
app.use('/v1', router)
app.use(notFound)

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: {
    name: err.name,
    message: err.message
  }})
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

if (!module.parent) {
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)

  server.listen(port, () => {
    debug('connecting...')
    console.log(`${chalk.green('[SERVER WORKING]')} Server listening on port ${port}`)
  })
}
