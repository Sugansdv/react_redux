import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import { login, logout } from '../redux/authSlice';

const Task9 = () => {
  const count = useSelector((state) => state.counter.value);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 p-4 border rounded w-50 ms-auto">
      <h4 className="text-center mb-4">Task 9: Multiple Reducers</h4>

      <div className="mb-4 w-75 ms-auto">
        <h5>Counter Value: {count}</h5>
        
        <button className="btn btn-danger me-2" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn btn-success me-2" onClick={() => dispatch(increment())}>+</button>
      </div>

      <div className="mb-4 w-75 ms-auto">
        <h5>User is {isLoggedIn ? "Logged In" : "Logged Out"}</h5>
        <button className="btn btn-primary me-2" onClick={() => dispatch(login())}>Login</button>
        <button className="btn btn-secondary" onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
};

export default Task9;
