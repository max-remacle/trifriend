import { SET_USER_INFO } from '../actions'

const initialState =  []

function userReducer (state = initialState, action){
    switch (action.type){
        case SET_USER_INFO:
            return action.user
        default:
            return state
    }
}

export default userReducer