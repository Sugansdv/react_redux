import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/user/userActions';

const Proj1 = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container text-center mt-5">
      <h4 className="mb-3"> Mini Project 1: User List Fetcher</h4>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {!loading && !error && (
        <ul className="list-group w-50 mx-auto">
          {data.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proj1;
