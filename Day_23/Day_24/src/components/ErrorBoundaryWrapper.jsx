import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="alert alert-danger m-4" role="alert">
    <h5>Something went wrong:</h5>
    <pre>{error.message}</pre>
    <button className="btn btn-primary mt-2" onClick={resetErrorBoundary}>
      Try Again
    </button>
  </div>
);

const ErrorBoundaryWrapper = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
