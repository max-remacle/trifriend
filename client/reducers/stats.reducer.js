import { SET_STATS } from '../actions'

const initialState =  {
    br: {
    wins: 46,
    kills: 1,
    kdRatio: 1.2453208556149733,
    downs: 2101
    }
}

function statsReducer (state = initialState, action){
    switch (action.type){
        case SET_STATS:
            return action.stats
        default:
            return state
    }
}

export default statsReducer