import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorSimulator = () => {
  const [hasError, setHasError] = useState(false);

  const handleSimulateError = () => {
    // Simulate an error by updating the state
    setHasError(true);
  };

  return (
    <div className="container mt-4">
      <div className="card p-3 shadow-sm">
        <h5 className="mb-3">Task 3. Error Simulation</h5>
        {hasError ? (
          <div className="alert alert-danger" role="alert">
            Simulated error occurred! 
          </div>
        ) : (
          <p>Click the button to simulate an error message.</p>
        )}
        <button
          className="btn btn-warning mt-2 w-25"
          onClick={handleSimulateError}
          disabled={hasError}
        >
          Simulate Error
        </button>
      </div>
    </div>
  );
};

export default ErrorSimulator;
