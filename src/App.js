import React from 'react';
import PlantsContainer from './app/plants/components/PlantsContainer';
import PlantsForm from './app/plants/components/PlantsForm';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counter_actions';

export const App = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  
  return (
    <div>
      <PlantsContainer />
      <PlantsForm />
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}