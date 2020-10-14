import request from 'superagent'

// need to pass in the id of the account as my account is currently hardcoded
export function getWarzoneStats(){
    return request
        .get('/api/v1/warzone')
        .then(res => res.body)
}