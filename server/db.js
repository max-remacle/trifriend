const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const database = require('knex')(config);

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

module.exports = {
    getWarzoneAccounts,
    getSingleWarzoneAccount
}