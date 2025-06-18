import React from 'react';

const ReusableFallback = ({ error, resetErrorBoundary }) => (
  <div className="alert alert-danger">
    <h5>⚠️ An error occurred</h5>
    <p>{error.message}</p>
    <button className="btn btn-primary mt-2" onClick={resetErrorBoundary}>
      Retry
    </button>
  </div>
);

export default ReusableFallback;
