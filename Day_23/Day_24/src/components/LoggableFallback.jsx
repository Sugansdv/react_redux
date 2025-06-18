import React from 'react';

const LoggableFallback = ({ error, resetErrorBoundary }) => (
  <div className="alert alert-danger">
    <h5>⚠️ A component crashed!</h5>
    <p>{error.message}</p>
    <button className="btn btn-primary mt-2" onClick={resetErrorBoundary}>
      Reset
    </button>
  </div>
);

export default LoggableFallback;
