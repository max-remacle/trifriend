import { bindActionCreators } from 'redux'
import { SET_USER_ACCOUNTS} from '../actions'

const initialState = []

function accountsReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_ACCOUNTS:
            return action.accounts
        default:
            return state
    }
}

export default accountsReducer