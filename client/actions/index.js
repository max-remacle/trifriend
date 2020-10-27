export const SET_STATS = 'SET_STATS'
export const SET_USER_INFO = 'SET_USER_INFO'

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