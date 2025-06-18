import React from 'react';

const MultiFallback = ({ error, resetErrorBoundary }) => (
  <div className="alert alert-warning">
    <strong>Error:</strong> {error.message}
    <br />
    <button className="btn btn-sm btn-primary mt-2" onClick={resetErrorBoundary}>
      Try Again
    </button>
  </div>
);

export default MultiFallback;
