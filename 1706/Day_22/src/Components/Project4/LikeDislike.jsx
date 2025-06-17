import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, dislikePost } from '../../redux/actions/postActions';

const LikeDislike = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  return (
    <div className="container mt-4">
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5>{post.title}</h5>
            <div className="d-flex align-items-center mt-2 gap-3">
              <button
                className="btn btn-success btn-sm"
                onClick={() => dispatch(likePost(post.id))}
              >
                👍 {post.likes}
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(dislikePost(post.id))}
              >
                👎 {post.dislikes}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikeDislike;
