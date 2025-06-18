import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalErrorStateComponent = () => {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      throw new Error("Something went wrong while processing the request.");
    } catch (err) {
      setError(err.message); 
    }
  };

  const handleReset = () => {
    setError(null); 
  };

  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 7: Global Error State using useState</h4>

        {error ? (
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
            <br />
            <button className="btn btn-secondary mt-2" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : (
          <>
            <p>
              This component uses <code>useState</code> to store and display error
              messages.
            </p>
            <button className="btn btn-danger w-25" onClick={handleClick}>
              Trigger Error
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GlobalErrorStateComponent;
