import React, { useState } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUser } from '../redux/features/github/githubActions';

const GitHubFetcher = () => {
  const [username, setUsername] = useState('');
  const [inputError, setInputError] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.github);

  const handleFetch = () => {
    if (username.trim() === '') {
      setInputError('⚠️ Please enter a GitHub username');
      return;
    }

    setInputError('');
    dispatch(fetchGitHubUser(username));
  };

  return (
    <div className="container text-center mt-5">
             
      <h4 className="mb-4">Task 8: Build a GitHub user fetcher: <br />
Input: username  ;   Output: avatar, name, repo count</h4>

      <h4 className="mb-4"> Task 9:
Validate empty input and show an error toast or message.</h4>


      <h4 className="mb-4 text-primary">GitHub User Fetcher</h4>

      {/* 🔹 Input Field */}
      <div className="d-flex justify-content-center mb-2">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-dark" onClick={handleFetch}>
          Search
        </button>
      </div>

      {/* 🔸 Input Validation Error */}
      {inputError && <p className="text-danger">{inputError}</p>}

      {/* 🔸 API Error */}
      {error && <p className="text-danger">Error: {error}</p>}

      {/* 🔸 Loading Spinner */}
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {/* 🔸 User Data */}
      {data && (
        <div className="card p-3 mx-auto mt-3" style={{ width: '300px' }}>
          <img
            src={data.avatar_url}
            alt="Avatar"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h5>{data.name || data.login}</h5>
          <p>Public Repositories: {data.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubFetcher;
