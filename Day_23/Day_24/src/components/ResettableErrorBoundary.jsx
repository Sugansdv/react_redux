import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ResettableCrashingComponent from './ResettableCrashingComponent';
import ResettableFallback from './ResettableFallback';

const ResettableErrorBoundary = () => {
  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 9: Reset Error State</h4>
        <p>reset error state and re-render the component using a reset button.</p>

        <ErrorBoundary
          FallbackComponent={ResettableFallback}
          onReset={() => {
            // Optionally log or reset related state
            console.log("Error boundary reset.");
          }}
          resetKeys={[]}
        >
          <ResettableCrashingComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ResettableErrorBoundary;
