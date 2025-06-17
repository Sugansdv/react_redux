import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvalidUsers } from '../redux/features/errorSlice';

const Task6 = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.error); // use state.error

  useEffect(() => {
    dispatch(fetchInvalidUsers());
  }, [dispatch]);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h4 className="text-center mb-4 text-danger">
        Task 6:
Show error message when request fails (simulate using a wrong URL).
      </h4>

      {loading && (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {error && <p className="text-danger mt-3">Error: {error}</p>}

      {!loading && !error && (
        <p className="text-muted">No data available.</p>
      )}
    </div>
  );
};

export default Task6;
