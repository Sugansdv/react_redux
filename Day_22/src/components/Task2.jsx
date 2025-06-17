// src/components/Task2.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/user/userActions';

const Task2 = () => {
  const dispatch = useDispatch();

  // 🔹 useSelector to get state from Redux store
  const { loading, data, error } = useSelector((state) => state.user);

  // 🔹 useEffect to dispatch thunk on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h4 className="text-center mb-4">
        Task 2: Use createAsyncThunk to fetch a list of users from:
          https://jsonplaceholder.typicode.com/users
      </h4>
       <h4 className="text-center mb-4">
        Task 4: Display fetched data in a component using useSelector().
      </h4>
       <h4 className="text-center mb-4">
       Task 5: Show loading message or spinner when API is being called.().
      </h4>
       <h4 className="text-center mb-4">
       Task 7: Add a "Reload" button that refetches the data on click (use dispatch(thunk())).
      </h4>
        {/* Show spinner while loading */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

       {/* 🔹 Reload Button */}
      <button className="btn btn-primary mb-3" onClick={() => dispatch(fetchUsers())}>
        Reload Users
      </button>

      {/* Loading state */}
      {loading && <p>Loading users...</p>}

      {/* Error state */}
      {error && <p className="text-danger">Error: {error}</p>}

      {/* Success state: Display users */}
      {!loading && !error && (
        <ul className="list-group w-50 text-center">
          {data.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task2;
