const express = require('express')
const { getWarzoneAccounts } = require('../database/db')
const router = express.Router()

router.get('/:id',(req,res)=>{
    const userId = Number(req.params.id)
    getWarzoneAccounts(userId)
        .then(accounts =>{
            console.log(accounts);
            res.json(accounts)
        })
        .catch(err =>console.log(err))
})



module.exports = router