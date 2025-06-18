import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import LoggableCrashingComponent from './LoggableCrashingComponent';
import LoggableFallback from './LoggableFallback';

const handleError = (error, info) => {
  console.error("🔴 Error Logged:");
  console.error("Error Message:", error.message);
  console.error("Component Stack:", info.componentStack);
};

const LoggableErrorBoundary = () => {
  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 10: Log Errors to Console</h4>
        <p>log caught errors using <code>onError</code> in an ErrorBoundary.</p>

        <ErrorBoundary
          FallbackComponent={LoggableFallback}
          onError={handleError}
        >
          <LoggableCrashingComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default LoggableErrorBoundary;
