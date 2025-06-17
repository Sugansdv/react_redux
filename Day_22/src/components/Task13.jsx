import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/user/userActions';
import { fetchPosts } from '../redux/features/post/postActions';

const Task13 = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const postState = useSelector((state) => state.post);

  const handleFetchBoth = () => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  };

  return (
    <div className="container text-center mt-5">
      <h4>Task 13: Dispatch multiple thunks from a single button click</h4>
      <button className="btn btn-success my-3" onClick={handleFetchBoth}>
        Fetch Users & Posts
      </button>

      <div className="row justify-content-around">
        <div className="col-md-5">
          <h5>Users:</h5>
          {userState.loading && <p>Loading users...</p>}
          {userState.error && <p className="text-danger">Error: {userState.error}</p>}
          <ul className="list-group">
            {userState.data.slice(0, 5).map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-5">
          <h5>Posts:</h5>
          {postState.loading && <p>Loading posts...</p>}
          {postState.error && <p className="text-danger">Error: {postState.error}</p>}
          <ul className="list-group">
            {postState.data.slice(0, 5).map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task13;
