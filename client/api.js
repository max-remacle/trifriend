import request from 'superagent'

// need to pass in the id of the account as my account is currently hardcoded
export function getWarzoneStats(id){
    return request
        .get(`/api/v1/warzone/${id}`)
        .then(res => res.body)
}


export function getUserAccounts(id){
    return request
        .get(`/api/v1/accounts/${id}`)
        .then(res => res.body)
}