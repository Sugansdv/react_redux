import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../redux/counter/counterActions';
import { selectCount } from '../redux/counter/counterSelectors';

const Task1and2 = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const handleAddAmount = () => {
    const number = parseInt(amount);
    if (!isNaN(number)) {
      dispatch(incrementByAmount(number));
      setAmount('');
    }
  };

  const handleIncrementIfOdd = () => {
    if (count % 2 !== 0) {
      dispatch(increment());
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3">Task 1: Basic Counter</h2>
      <h2 className="mb-4">Task 2: Reset Button</h2>
      <h2 className="mb-4">Task 4: Conditional Increment (only if odd)</h2>
      <h2 className="mb-4">Task 5: Disable + if ≥10, - if ≤0</h2>

      <h1 className="display-4">{count}</h1>

      <div className="btn-group mt-3 mb-4" role="group">
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(decrement())}
          disabled={count <= 0}
        >
          ➖ Decrement
        </button>

        <button
          className="btn btn-success me-2"
          onClick={() => dispatch(increment())}
          disabled={count >= 10}
        >
          ➕ Increment
        </button>

        <button
          className="btn btn-secondary me-2"
          onClick={() => dispatch(reset())}
        >
          🔁 Reset
        </button>

        <button className="btn btn-warning" onClick={handleIncrementIfOdd}>
          🟡 Increment If Odd
        </button>
      </div>

      <div className="mt-4">
        <h2 className="mb-3">Task 3: Increment by Amount</h2>
        <div className="row justify-content-center">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleAddAmount}>
              ➕ Add Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1and2;
