const request = require('supertest')
const server = require('../server')


describe('GET /api/v1/warzone',() =>{
    test('gets 200 status on server',() =>{
        return request(server)
            .get('/api/v1/warzone')
            .then((res) =>{
                expect(res.status).toBe(200)
            })
    })
})