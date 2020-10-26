const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = knex(config)
const { generateHash } = require('authenticare/server')

function saveNewUser (user, db = connection) {
  user.email = user.username
  return generateHash(user.password)
    .then((passwordHash) => {
      return db('users')
        .insert({
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email,
          password_hash: passwordHash,
          created_at: new Date(Date.now())
        })
    })
    .catch((err) => console.log(err))
}

function userExists (email, db = connection) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then((count) => {
      return count[0].n > 0
    })
}

function getUserByName (email, db = connection) {
  return db('users')
    .where('email', email)
    .select('id', 'email as username', 'password_hash as hash')
    .first()
    .then((user) => {
      return user
    })
}

module.exports = {
    saveNewUser,
    userExists,
    getUserByName
}