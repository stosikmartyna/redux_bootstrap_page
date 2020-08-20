import React from 'react';
import PlantsContainer from './app/plants/components/PlantsContainer';
import PlantsForm from './app/plants/components/PlantsForm';

export const App = () => {
  return (
    <div>
      <PlantsContainer />
      <PlantsForm />
    </div>
    
  );
}