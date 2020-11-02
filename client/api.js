import request from 'superagent'

// need to pass in the id of the account as my account is currently hardcoded
export function getWarzoneStats(id){
    return request
        .get(`/api/v1/warzone/${id}`)
        .then(res => res.body)
}

let accounts= [
    {id:1, user_name:'Bossman', platform:'Battle',user_id:1},
    {id:2, user_name:'Aeollus', platform:'Battle',user_id:1}
]
export function getUserAccounts(){
    return Promise.resolve(accounts)
}