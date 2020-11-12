const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const database = require('knex')(config);
require("regenerator-runtime/runtime");

function getWarzoneAccounts(userId, db = database){
    return db('warzone')
        .where('user_id',userId)
        .select()
}

function getSingleWarzoneAccount(id, db=database){
    return db('warzone')
        .where({id})
        .first()
}

function getLeagueAccounts(userId, db=database){
    return db('league')
    .where('user_id', userId)
    .select()
}
function getValorantAccounts(userId, db=database){
    return db('valorant')
    .where('user_id', userId)
    .select()
}

async function combineAccounts(userId, db=database){
    const warzone = await getWarzoneAccounts(userId, db)
    const league = await getLeagueAccounts(userId,db)
    const valorant = await getValorantAccounts(userId,db)
    const combined = warzone.concat(league,valorant)
    return combined
}

function addAccount(userId, account, db=database){
    switch(account.game){
        case 'Warzone':
            return db('warzone')
            .insert({
                user_name:account.username,
                game_id: 1,
                user_id: userId,
                platform:account.platform
            })
        case 'League of Legends':
            return db('league')
            .insert({
                user_name:account.username,
                game_id: 2,
                user_id: userId,
            })
        case 'Valorant':
            return db('valorant')
            .insert({
                user_name:account.username,
                game_id: 3,
                user_id: userId,
            })
    }
}

function deleteAccount(id, game_id, db=database){
    if(!id) return Promise.reject('id must be specified')
    switch(game_id){
        case 1:
            return db('warzone')
                .where({id})
                .delete()
        case 2:
            return db('league')
                .where({id})
                .delete()
        case 3:
           return db('valorant')
                .where({id})
                .delete()
    }
}


module.exports = {
    getWarzoneAccounts,
    getSingleWarzoneAccount,
    getLeagueAccounts,
    combineAccounts,
    addAccount,
    deleteAccount
}