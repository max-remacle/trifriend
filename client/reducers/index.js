import { combineReducers } from 'redux'

import stats from './stats.reducer'
import user from './user.reducer'


const reducers = combineReducers({
    stats,
    user
})

export default reducers