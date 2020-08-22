import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../counter_actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Container } from 'react-bootstrap';
import './CounterContainer.css';

export const CounterContainer = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <Container>
            <h1>Counter {counter}</h1>
            <Row>
                <Button onClick={() => dispatch(increment())} size="lg" variant="success">+</Button>
                <Button onClick={() => dispatch(decrement())} size="lg" variant="success">-</Button>
            </Row>
        </Container>
    )
}