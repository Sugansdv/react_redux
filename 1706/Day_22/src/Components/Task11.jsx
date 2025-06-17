import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/actions/userActions';

const Task11 = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleAddUser = () => {
    if (username.trim()) {
      dispatch(addUser({ name: username }));
      setUsername('');
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded w-50">
      <h4 className="text-center mb-4">Task 11: Dispatch Actions with Payload</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
      </div>

      <h6>Users List:</h6>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task11;
