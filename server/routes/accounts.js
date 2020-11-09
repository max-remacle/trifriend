const express = require('express')
const { combineAccounts, addWarzoneAccount, addLeagueAccount, addValorantAccount } = require('../database/db')
const router = express.Router()

router.get('/:id',(req,res)=>{
    const userId = Number(req.params.id)
    combineAccounts(userId)
        .then(accounts =>{
            res.json(accounts)
        })
        .catch(err =>console.log(err))
})

router.post('/:id',(req,res) =>{
    const id = Number(req.params.id)
    const account = req.body
    switch(account.game){
        case "Warzone":
            addWarzoneAccount(id, account)
            .then(account =>{
                res.status(201).json(account)
            })
            break
        case "League of Legends":
            addLeagueAccount(id, account)
            .then(account =>{
                res.status(201).json(account)
            })
            break
        case "Valorant":
            addValorantAccount(id, account)
            .then(account =>{
                res.status(201).json(account)
            })
            break
        default:
            console.log("please select a game");
    }
})


module.exports = router