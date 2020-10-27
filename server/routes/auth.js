const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserByName,
  saveNewUser } = require('../database/authDb')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser: saveNewUser
})

module.exports = router