import nock from 'nock'
import { getWarzoneStats, postAccount } from './api'

test('getwarzoneStats gets stats from server', () =>{
    nock(/localhost/)
    .get('/api/v1/warzone/1')
    .reply(200, [{ wins: 50 , kills: 300 }])

    return getWarzoneStats(1)
        .then(stats => {
            expect(stats[0].wins).toBe(50)
            expect(stats.length).toBe(1)
        })
    
})

test('posts an account for a user', () =>{
    const scope = nock(/localhost/)
        .post('/api/v1/accounts/3')
        .reply(201)
    return postAccount(3,{username: 'test', platform:'battle'})
        .then(() =>{
            expect(scope.isDone()).toBe(true)
        })
})