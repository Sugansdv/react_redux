
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUser } from '../redux/features/github/githubActions';

const Proj4 = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.github);

  const handleSearch = () => {
    if (username.trim() !== '') {
      dispatch(fetchGitHubUser(username));
    }
  };

  return (
    <div className="container text-center mt-5">
      <h4 className="mb-4">Mini Project 4: GitHub Profile Finder</h4>
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-dark" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <div className="spinner-border text-dark" role="status" />}
      {error && <p className="text-danger mt-2">❌ {error}</p>}

      {data && (
        <div className="card p-3 mx-auto mt-3" style={{ width: '300px' }}>
          <img
            src={data.avatar_url}
            alt={data.login}
            className="img-fluid rounded-circle mb-2"
            style={{ width: '100px' }}
          />
          <h5>{data.name || data.login}</h5>
          <p>Repos: {data.public_repos}</p>
          <p>Followers: {data.followers}</p>
        </div>
      )}
    </div>
  );
};

export default Proj4;
