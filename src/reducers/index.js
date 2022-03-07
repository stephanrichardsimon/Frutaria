import { combineReducers } from 'redux'
import { reducer as frutaReducers } from './fruta.reducer'

const reducers = combineReducers({
    frutaReducers,
})

export {reducers};