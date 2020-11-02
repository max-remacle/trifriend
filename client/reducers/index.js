import { combineReducers } from 'redux'

import stats from './stats.reducer'
import user from './user.reducer'
import accounts from './accounts.reducer'


const reducers = combineReducers({
    stats,
    user,
    accounts
})

export default reducers