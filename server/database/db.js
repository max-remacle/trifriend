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

async function combineAccounts(userId, db=database){
    const warzone = await getWarzoneAccounts(userId, db)
    const league = await getLeagueAccounts(userId,db)
    const combined = warzone.concat(league)
    return combined
}


module.exports = {
    getWarzoneAccounts,
    getSingleWarzoneAccount,
    getLeagueAccounts,
    combineAccounts
}