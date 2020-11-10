import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import stats from './stats.reducer'
import user from './user.reducer'
import accounts from './accounts.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'user',
        'accounts'
    ]
}

const rootReducer = combineReducers({
    stats,
    user,
    accounts
})

export default persistReducer(persistConfig, rootReducer)