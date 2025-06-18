import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MultiFallback from './MultiFallback';

const MultiErrorBoundary = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={MultiFallback}
    onError={(error, info) => {
      console.error("Error in component:", error);
      console.error("Component Stack:", info.componentStack);
    }}
  >
    {children}
  </ErrorBoundary>
);

export default MultiErrorBoundary;
