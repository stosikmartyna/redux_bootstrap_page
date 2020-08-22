import { combineReducers } from 'redux';
import plantsReducer from './app/plants/plants_reducers';
import counterReducer from './app/counter/counter_reducers';

const rootReducer = combineReducers({
    plants: plantsReducer,
    counter: counterReducer
})

export default rootReducer