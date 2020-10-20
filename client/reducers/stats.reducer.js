import { SET_STATS } from '../actions'

const initialState =  []

function statsReducer (state = initialState, action){
    switch (action.type){
        case SET_STATS:
            return action.stats
        default:
            return state
    }
}

export default statsReducer