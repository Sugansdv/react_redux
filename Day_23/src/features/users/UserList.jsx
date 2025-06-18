import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-5 w-50">
      
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center"> Mini Project 2: User List with Thunk</h2>

          {loading && <div className="alert alert-info">Loading users...</div>}
          {error && <div className="alert alert-danger">Error: {error}</div>}

          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                <strong>{user.name}</strong>
                <div className="text-muted small">{user.email}</div>
              </li>
            ))}
          </ul>
      </div>
      </div>
    </div>
  );
};

export default UserList;
