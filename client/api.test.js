import nock from 'nock'
import { getWarzoneStats } from './api'

test('getwarzoneStats gets stats from server', () =>{
    nock(/localhost/)
    .get('/api/v1/warzone')
    .reply(200, [{ wins: 50 , kills: 300 }])

    return getWarzoneStats()
        .then(stats => {
            expect(stats[0].wins).toBe(50)
            expect(stats.length).toBe(1)
        })
    
})
