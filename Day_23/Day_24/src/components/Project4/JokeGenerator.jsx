import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    setJoke(null);

    try {
    //   const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      
      const response = await fetch('https://broken-api-url.com');

      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }

      const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4>Mini Project 4: Random Joke Generator</h4>
        <p>Click the button to get a random joke. Handles errors if API fails.</p>

        <button className="btn btn-primary mb-3 w-25" onClick={fetchJoke} disabled={loading}>
          {loading ? 'Loading...' : 'Get Joke'}
        </button>

        {error && (
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
          </div>
        )}

        {joke && (
          <div className="alert alert-success">
            <h6>Joke:</h6>
            <p><strong>{joke.setup}</strong></p>
            <p>{joke.punchline}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokeGenerator;
