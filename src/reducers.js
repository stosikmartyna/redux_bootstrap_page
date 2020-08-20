import { combineReducers } from 'redux';
import plantsReducer from './app/plants/plants_reducers';
import flowerpotsReducer from './app/flowerpots/flowerpots_index';

const rootReducer = combineReducers({
    plants: plantsReducer,
    flowerpots: flowerpotsReducer
})

export default rootReducer