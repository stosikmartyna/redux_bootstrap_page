import React from 'react';
import PlantsContainer from './app/plants/components/PlantsContainer';
import PlantsForm from './app/plants/components/PlantsForm';
import { CounterContainer } from './app/counter/components/CounterContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './App.css';


export const App = () => {
  return (
    <Container>
      <Card className="card" style={{ width: '25rem' }}>
        <PlantsContainer />
        <PlantsForm />
      </Card>
      <CounterContainer />
    </Container>
  );
}