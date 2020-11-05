const knex = require('knex')
const testConfig = require('../../knexfile').test

const {getWarzoneAccounts, getSingleWarzoneAccount, getLeagueAccounts, combineAccounts} = require('./db')

let db = knex(testConfig)

beforeAll(() => {
    return db.migrate.latest()
})

beforeEach(() =>{
    return db.seed.run()
})

describe('warzone',() =>{
    test('gets all warzone accounts for a user',() =>{
        return getWarzoneAccounts(1,db)
           .then(accounts =>{
                expect(accounts.length).toBe(2)
                expect(accounts[0].user_name).toBe('Aeollus%25231985')
            })
    }) 
    test('gets a single account',() =>{
        return getSingleWarzoneAccount(1,db)
           .then(account =>{
                expect(account.user_name).toBe('Aeollus%25231985')
            })
    }) 
})

describe('league',() =>{
    test('gets all league accounts',()=>{
        return getLeagueAccounts(1,db)
            .then(accounts =>{
                expect(accounts.length).toBe(2)
                expect(accounts[0].user_name).toBe('Positive Chi')
            })
    })
})

describe('combined',() =>{
    test('gets all accounts for a userId', () =>{
        return combineAccounts(1, db)
        .then(accounts =>{
            expect(accounts.length).toBe(4)
        })
    })
})