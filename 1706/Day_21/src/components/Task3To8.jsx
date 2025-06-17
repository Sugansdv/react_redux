import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Task3To8 = () => {
  const count = useSelector((state) => state.counter.value); // Task 7
  const dispatch = useDispatch(); // Task 8

  return (
    <div className="container mt-5 p-4 border rounded">
      <div className="mb-4">
        <h4 className="text-center">Redux Setup Tasks</h4>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success">
            Task 3: Create Redux Store with initial state
          </li>
          <li className="list-group-item list-group-item-success">
            Task 4: Action Creators - increment & decrement
          </li>
          <li className="list-group-item list-group-item-success">
            Task 5: Reducers to handle actions
          </li>
          <li className="list-group-item list-group-item-success">
            Task 6: Connected Redux Store to React using Provider
          </li>
          <li className="list-group-item list-group-item-success">
            Task 7: Access store data using useSelector
          </li>
          <li className="list-group-item list-group-item-success">
            Task 8: Dispatch actions using useDispatch on button click
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h5 className="mb-3">Counter Value: {count}</h5>
         <button className="btn btn-danger me-2" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button className="btn btn-success me-2" onClick={() => dispatch(increment())}>
          Increment
        </button>
       
      </div>
    </div>
  );
};

export default Task3To8;
