import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../../redux/actions/jokeActions';

const JokeGenerator = () => {
  const dispatch = useDispatch();
  const { joke, loading, error } = useSelector(state => state.joke);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  return (
    <div className="container mt-5 w-50">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4"> Mini Project 4: Joke Generator</h2>

          {loading && <div className="alert alert-info">Loading...</div>}

          {error && (
            <div className="alert alert-danger">
              <p>Error: {error}</p>
              <button className="btn btn-danger mt-2" onClick={() => dispatch(fetchJoke())}>
                Retry
              </button>
            </div>
          )}

          {joke && (
            <div className="mb-3">
              <p className="fw-bold">{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          )}

          <button className="btn btn-primary" onClick={() => dispatch(fetchJoke())}>
            New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokeGenerator;
