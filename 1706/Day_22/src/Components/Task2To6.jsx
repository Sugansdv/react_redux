import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/counterActions';

const Task2to6 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="container mt-5 p-4 border rounded">
       <h4 className="text-center mb-4">Task 2 : Basic Action Creation:</h4>
      <h4 className="text-center mb-4">Task 4: Multiple Actions - Define actions for "INCREMENT", "DECREMENT", and 
"RESET" the counter. </h4>
 <h4 className="text-center mb-4">Task 5. Action Creators: Write action creator functions that return action objects. </h4>
  <h4 className="text-center mb-4">Task 6. Reducer Implementation: Create a reducer that handles "INCREMENT" and 
"DECREMENT" actions. </h4>
 <h4 className="text-center mb-4">Task 7. Initial State in Reducer: Set up an initial state inside the reducer - <span className='fw-bold'>counterReducer.js</span></h4>
      <div className="text-center mb-3">
        <h4 className="text-center mb-4">Task 8.Switch Statement in Reducer: Use a switch statement to handle multiple 
action types. - <span className='fw-bold'>counterReducer.js</span></h4>
      <div className="text-center mb-3"></div>
        <h5>Current Count: <span className="badge bg-primary">{count}</span></h5>
      </div>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
        <button className="btn btn-warning" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className="btn btn-danger" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Task2to6;
