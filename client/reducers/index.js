
import { combineReducers } from 'redux'

const stats = {
    wins: 46,
    kills: 500
}

const reducers = combineReducers({
    test: () => stats
})

export default reducers