import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const Proj4 = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ name: username }));
      setUsername('');
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded w-50">
      <h3 className="text-center mb-4">Mini Project 4: Authentication App</h3>

      {isLoggedIn ? (
        <>
          <h5 className="text-success text-center">
            Welcome, {user?.name || 'User'}!
          </h5>

          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Proj4;
