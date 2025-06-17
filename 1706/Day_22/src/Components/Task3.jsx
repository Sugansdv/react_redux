import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/actions/userActions';

const Task3 = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      dispatch(addUser({ name, email }));
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded">
      <h4 className="text-center mb-4">Task 3: Action with Payload</h4>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-5">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Add User</button>
        </div>
      </form>

      <h5>User List:</h5>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task3;
