import types from './flowerpots_types';

const INITIAL_STATE = {
    listName: 'Colors',
    list: [
      'Red',
      'Blue',
      'Green'
    ]
  }

const flowerpotsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_FLOWERPOT:
        return {
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_FLOWERPOTS:
        return {
          ...state, list: []
        }
      default:
        return state
    }
}

export default flowerpotsReducer