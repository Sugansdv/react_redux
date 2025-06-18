import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="container mt-5">
      <div className="alert alert-danger">
        <h4>Oops! Something went wrong.</h4>
        <p>{error.message}</p>
        <button className="btn btn-primary mt-2" onClick={resetErrorBoundary}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
