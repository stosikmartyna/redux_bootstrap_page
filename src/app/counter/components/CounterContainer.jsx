import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../counter_actions';

export const CounterContainer = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}