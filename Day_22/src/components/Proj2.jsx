import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/features/post/postActions';

const Proj2 = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mt-5 text-center">
      <h4 className="mb-4">Mini Project 2: Post Viewer</h4>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {!loading && !error && (
        <ul className="list-group w-50 mx-auto">
          {data.slice(0, 10).map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proj2;
