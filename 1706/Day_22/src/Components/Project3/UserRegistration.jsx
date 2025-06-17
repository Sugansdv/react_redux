import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../../redux/actions/userActions'; 

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const handleRegister = () => {
    if (name.trim() && email.trim()) {
      dispatch(addUser({ name, email }));
      setName('');
      setEmail('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container mt-4 p-4 border rounded">
      <h4 className="mb-4 text-primary">👤 User Registration</h4>

      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={handleRegister}>
          Register
        </button>
      </div>

      <h5 className="mt-4">📋 Registered Users</h5>
      {users.length === 0 ? (
        <p className="text-muted">No users registered.</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>{user.name}</strong> ({user.email})
              </span>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(user.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserRegistration;
