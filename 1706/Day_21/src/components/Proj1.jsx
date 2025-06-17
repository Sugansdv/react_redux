import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Proj1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5 p-4 border rounded w-50 shadow">
      <h3 className="mb-4">Mini Project 1: Counter App</h3>
      <h4>Current Count: <span className="text-primary">{count}</span></h4>
      <div className="mt-4">
        
        <button className="btn btn-danger me-2" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className="btn btn-success me-2" onClick={() => dispatch(increment())}>Increment</button>
        <button className="btn btn-secondary" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Proj1;
