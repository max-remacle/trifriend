require('dotenv').config()
const express = require('express')
const request = require('superagent')


const router = express.Router()


router.get('/', (req,res) => {
    return request
      .get('https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Aeollus%25231985/battle')
      .set({'x-rapidapi-host':process.env.REACT_APP_API_HOST,'x-rapidapi-key':process.env.REACT_APP_API_KEY})
      .then(stats => {
        res.json(stats.body)
      })
  })

  module.exports = router