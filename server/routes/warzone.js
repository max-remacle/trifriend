const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req,res) => {
    return request
      .get('https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Aeollus%25231985/battle')
      .set({'x-rapidapi-host':'call-of-duty-modern-warfare.p.rapidapi.com','x-rapidapi-key':'bda02fdf5cmsh913886130399a5ep145a5djsn7b0c144b2d37'})
      .then(stats => res.json(stats.body))
  })

  module.exports = router