import { combineReducers } from 'redux';
import plantsReducer from './app/plants/duck';
import flowerpotsReducer from './app/flowerpots/duck';

const rootReducer = combineReducers({
    plants: plantsReducer,
    flowerpots: flowerpotsReducer
})

export default rootReducer