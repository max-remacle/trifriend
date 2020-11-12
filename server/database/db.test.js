const knex = require('knex')
const testConfig = require('../../knexfile').test

const {getWarzoneAccounts, getSingleWarzoneAccount, getLeagueAccounts, combineAccounts, addAccount, deleteAccount} = require('./db')

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
                expect(accounts[0].user_name).toBe('Aeollus#1985')
            })
    }) 
    test('gets a single account',() =>{
        return getSingleWarzoneAccount(1,db)
           .then(account =>{
                expect(account.user_name).toBe('Aeollus#1985')
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
            expect(accounts.length).toBe(5)
        })
    })
})
describe('adding accounts',() =>{
    test('adds an account to the correct database',() =>{
        const account = {user_name:'Max',platform:'battle',game:'Warzone'}
        return addAccount(1, account, db)
        .then((account) =>{
            return getWarzoneAccounts(1,db)
        })
        .then(accounts =>{
            expect(accounts.length).toBe(3)
        })
    })
})
describe('deleting accounts',() =>{
    test('deletes an account from the correct database',() =>{
        return deleteAccount(3,1, db)
        .then(() =>{
            return getWarzoneAccounts(1,db)
        })
        .then(accounts =>{
            expect(accounts.length).toBe(1)
        })
    })
})