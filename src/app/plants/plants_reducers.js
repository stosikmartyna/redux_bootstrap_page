import types from './plants_types';

const INITIAL_STATE = {
    listName: 'Plants',
    list: [
      'Monstera',
      'Cactus',
      'Maranta'
    ]
  }

const plantsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_PLANT:
        return {
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_PLANTS:
        return {
          ...state, list: []
        }
      default:
        return state
    }
}

export default plantsReducer