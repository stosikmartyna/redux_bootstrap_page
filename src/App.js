import React from 'react';
import { createStore, combineReducers } from 'redux';

const initialPlants = {
  listName: 'Plants',
  list: [
    'Monstera',
    'Cactus',
    'Maranta'
  ]
}

const initialFlowerpots = {
  listName: 'Colors',
  list: [
    'Red',
    'Blue',
    'Green'
  ]
}

function plants(state = initialPlants, action) {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_PLANTS':
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

function flowerpots(state = initialFlowerpots, action) {
  switch (action.type) {
    case 'ADD_FLOWERPOT':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_FLOWERPOTS':
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

const allReducers = combineReducers({plants, flowerpots})
const store = createStore(allReducers)

const addFlowerpot = item => ({type: 'ADD_FLOWERPOT', item})
store.dispatch(addFlowerpot('Yellow'))

window.store = store

export const App = () => {
  return (
    <h1>Hello!</h1>
  );
}