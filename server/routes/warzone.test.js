const request = require('supertest')
const { getSingleWarzoneAccount } = require('../database/db')
const server = require('../server')

jest.mock('../database/db', () => ({
    getSingleWarzoneAccount: jest.fn()
  }))

describe('GET /api/v1/warzone/:id',() =>{
    test('gets 200 status on server',() =>{
        getSingleWarzoneAccount.mockImplementation(() => Promise.resolve({id:2,user_name:'Jesswarks18',platform:'psn',user_id:2}))
        return request(server)
            .get('/api/v1/warzone/2')
            .then((res) =>{
                expect(res.status).toBe(200)
            })
    })
})