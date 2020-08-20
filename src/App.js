import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)
window.store = store

export const App = () => {
  return (
    <h1>Hello!</h1>
  );
}