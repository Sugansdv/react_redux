import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // store the actual error

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // ❌ Use an invalid URL to simulate error
        const res = await fetch('https://invalid-api.typicode.com/users');
        if (!res.ok) {
          throw new Error("API responded with status: " + res.status);
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err); // save error for render
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ❗ Trigger error boundary during render
  if (error) throw error;

  if (loading) return <div className="alert alert-info">⏳ Loading users...</div>;

  return (
    <div>
      <h5>👥 Users</h5>
      <ul className="list-group">
        {users.map(user => (
          <li className="list-group-item" key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
