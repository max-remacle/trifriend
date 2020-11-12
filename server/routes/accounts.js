const express = require('express')
const { combineAccounts, addAccount, deleteAccount } = require('../database/db')
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
    const userId = Number(req.params.id)
    const account = req.body
    addAccount(userId, account)
    .then(account =>{
        res.status(201).json(account)
    })
})

router.delete('/:id',(req,res) =>{
    const id = Number(req.params.id)
    const {game_id} = req.body
    deleteAccount(id, game_id)
    .then(account =>{
        res.status(200).json(account)
    })

})


module.exports = router