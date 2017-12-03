'use strict'

const path = require('path')

module.exports = {

  mongo: {

    uri: 'mongodb://localhost/in-memory-queue',
    useMongoClient: true
  },
  port: 9000,
  secrets: {

    session: 'my-test-secret'
  },
  root: path.normalize(path.join(__dirname, '/../..'))
}
