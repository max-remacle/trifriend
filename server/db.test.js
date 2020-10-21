
const knex = require('knex')
const testConfig = require('../knexfile').test

const {getWarzoneAccounts, getSingleWarzoneAccount} = require('./db')

let db = knex(testConfig)

beforeAll(() => {
    return db.migrate.latest()
})

beforeEach(() =>{
    return db.seed.run()
})

test('gets all warzone accounts for a user',() =>{
    return getWarzoneAccounts(1,db)
       .then(accounts =>{
            expect(accounts.length).toBe(2)
            expect(accounts[0].user_name).toBe('Aeollus#1985')
        })
}) 
test('gets a single account',() =>{
    return getSingleWarzoneAccount(1,db)
       .then(account =>{
            expect(account.user_name).toBe('Aeollus#1985')
        })
}) 