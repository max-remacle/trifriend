const express = require('express')
const { getWarzoneAccounts, combineAccounts } = require('../database/db')
const router = express.Router()

router.get('/:id',(req,res)=>{
    const userId = Number(req.params.id)
    combineAccounts(userId)
        .then(accounts =>{
            res.json(accounts)
        })
        .catch(err =>console.log(err))
})



module.exports = router