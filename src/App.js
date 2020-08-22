import React from 'react';
import PlantsContainer from './app/plants/components/PlantsContainer';
import PlantsForm from './app/plants/components/PlantsForm';
import { CounterContainer } from './app/counter/components/CounterContainer';

export const App = () => {
  return (
    <div>
      <PlantsContainer />
      <PlantsForm />
      <CounterContainer />
    </div>
  );
}