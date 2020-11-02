export const SET_STATS = 'SET_STATS'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_USER_ACCOUNTS = 'SET_USER_ACCOUNTS'


export function setStats (stats){
    return {
        type:SET_STATS,
        stats
    }
}

export function setUserInfo (user){
    return {
        type:SET_USER_INFO,
        user
    }
}

export function setAccounts (accounts){
    return {
        type:SET_USER_ACCOUNTS,
        accounts
    }
}