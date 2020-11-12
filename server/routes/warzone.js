require('dotenv').config()
const express = require('express')
const request = require('superagent')

const {getSingleWarzoneAccount} = require('../database/db')

const router = express.Router()


router.get('/:id', (req,res) => {
    const id = Number(req.params.id)
    getSingleWarzoneAccount(id)
      .then(account =>{
        const username = account.user_name.replace('#','%2523')
        return request
          .get(`https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${username}/${account.platform}`)
          .set({'x-rapidapi-host':process.env.REACT_APP_API_HOST,'x-rapidapi-key':process.env.REACT_APP_API_KEY})
          .then(stats => {
            res.json(stats.body)
         })
      })
  })



  module.exports = router