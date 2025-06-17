import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counter/counterSlice';

const Proj1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5">
      <h2>Proj1: Counter App</h2>
      <h1 className="display-4">{count}</h1>
      <div className="btn-group mt-3">
        <button className="btn btn-danger me-2" onClick={() => dispatch(decrement())}>
          ➖ Decrement
        </button>
        <button className="btn btn-success" onClick={() => dispatch(increment())}>
          ➕ Increment
        </button>
      </div>
    </div>
  );
};

export default Proj1;
