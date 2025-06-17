import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, increment, decrement } from '../redux/counterSlice';

const Task10 = ({ initialValue }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  // 🔹 Dispatch initialize only on first mount
  useEffect(() => {
    dispatch(initialize(initialValue));
  }, [dispatch, initialValue]);

  return (
     <div className="container mt-5 p-4 border rounded text-center">
      <h4 className="mb-4"> Task 10: Initial State from Props</h4>
      <h5>Initial Value from Props: <span className="text-primary">{initialValue}</span></h5>
      <h5 className="my-3">Current Counter: {count}</h5>
      <button className="btn btn-success me-2" onClick={() => dispatch(increment())}>+</button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Task10;
