import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ReusableFallback from './ReusableFallback';

const ReusableErrorBoundary = ({ children }) => {
  const handleError = (error, info) => {
    console.error("ReusableErrorBoundary caught an error:", error);
    console.error("Component Stack:", info.componentStack);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ReusableFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ReusableErrorBoundary;
