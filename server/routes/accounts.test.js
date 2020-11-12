const request = require('supertest')
const server = require('../server')
import { combineAccounts, addAccount, deleteAccount } from '../database/db'

jest.mock('../database/db',()=>({
    combineAccounts: jest.fn(),
    addAccount: jest.fn(),
    deleteAccount: jest.fn() 
}))

describe('GET',()=>{
    test('return accounts when succesful',()=>{
    combineAccounts.mockImplementation(()=>Promise.resolve([
        {id: 1, user_name: 'Aeollus#1985', platform:'battle', user_id:1, game_id:1},
        {id: 2, user_name: 'Testing#1985', platform:'battle', user_id:1, game_id:1}
    ]))
    return request(server)
        .get('/api/v1/accounts/1')
        .then(res =>{
            expect(res.body.length).toBe(2)
            expect(res.status).toBe(200)
        })
    })
})
describe('POST',()=>{
    test('add an account to database',()=>{
        addAccount.mockImplementation(()=>Promise.resolve([4]))
        return request(server)
            .post('/api/v1/accounts/1')
            .send({user_name:'Batman'})
            .then(res =>{
                expect(res.status).toBe(201)
                expect(addAccount).toHaveBeenCalled()
                expect(addAccount.mock.calls[0][1].user_name).toBe('Batman')
            })
    })
})

describe('DELETE',()=>{
    test('calls delete account database function',()=>{
        deleteAccount.mockImplementation(()=>Promise.resolve(1))
        return request(server)
        .delete('/api/v1/accounts/1')
        .then(res =>{
            expect(res.status).toBe(200)
        })
    })
})