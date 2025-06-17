import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment1, decrement1 } from '../redux/counter/counterSlice1';
import { increment2, decrement2 } from '../redux/counter/counterSlice2';

const Task6 = () => {
  const count1 = useSelector((state) => state.counter1.value);
  const count2 = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Task 6: Multiple Counters</h2>

      {/* Counter 1 */}
      <div className="mb-4">
        <h4 className='text-muted'>Counter 1: <span className='text-danger'>{count1}</span></h4>
        <button className="btn btn-danger me-2" onClick={() => dispatch(decrement1())}>Decrement</button>
        <button className="btn btn-primary" onClick={() => dispatch(increment1())}>Increment</button>
      </div>

      {/* Counter 2 */}
      <div>
        <h4 className='text-muted'>Counter 2: <span className='text-danger'>{count2}</span></h4>
        <button className="btn btn-danger me-2" onClick={() => dispatch(decrement2())}>Decrement</button>
        <button className="btn btn-primary" onClick={() => dispatch(increment2())}>Increment</button>
      </div>
    </div>
  );
};

export default Task6;
