import React from 'react';

const CounterFallback = ({ error, resetErrorBoundary }) => (
  <div className="alert alert-danger text-center">
    <h5> Something went wrong!</h5>
    <p>{error.message}</p>
    <button className="btn btn-secondary mt-2" onClick={resetErrorBoundary}>
      Reset Counter
    </button>
  </div>
);

export default CounterFallback;
