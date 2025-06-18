import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchPosts } from '../redux/actions/userActions';

const Task9 = () => {
  const dispatch = useDispatch();
  const { loading, users, posts, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-4 w-50">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-3">User List</h2>

          {loading && <div className="alert alert-info">Loading...</div>}
          {error && <div className="alert alert-danger">Error: {error}</div>}

          <ul className="list-group mb-3">
            {users && users.map((user) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id}>
                {user.name}
                <span className="badge bg-secondary">{user.email}</span>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
            Fetch Posts
          </button>

          {posts.length > 0 && (
            <>
              <h4 className="mt-4">Posts</h4>
              <ul className="list-group">
                {posts.map((post) => (
                  <li className="list-group-item" key={post.id}>
                    <strong>{post.title}</strong><br />
                    <small>{post.body}</small>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task9;
