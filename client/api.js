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

export function postAccount(id, account, game){
    return request
        .post(`/api/v1/accounts/${id}`)
        .send({username:account.username, platform:account.platform, game:game})
        .then(res => res.body)
}

export function deleteAccount(id, game_id){
    return request
        .delete(`/api/v1/accounts/${id}`)
        .send({game_id})
        .then(res => console.log(res.body))
}