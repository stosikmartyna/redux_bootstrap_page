import { combineReducers } from 'redux';
import plantsReducer from './app/plants/plants_reducers';
import flowerpotsReducer from './app/flowerpots/flowerpots_index';
import counterReducer from './reducers/counter';

const rootReducer = combineReducers({
    plants: plantsReducer,
    flowerpots: flowerpotsReducer,
    counter: counterReducer
})

export default rootReducer