const path = require('path')
const express = require('express')

const server = express()

const {auth, warzone, accounts} = require('./routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', auth)
server.use('/api/v1/warzone', warzone)
server.use('/api/v1/accounts', accounts)

module.exports = server
