import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CounterComponent from './CounterComponent';
import CounterFallback from './CounterFallback';

const CounterErrorBoundary = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm text-center">
        <h4>Mini Project 1: Error Boundary with Counter</h4>
        <p>This counter throws an error when it reaches 5 and shows a fallback UI.</p>

        <ErrorBoundary
          FallbackComponent={CounterFallback}
          onReset={() => {
            console.log("Counter reset triggered.");
          }}
          resetKeys={[]}
        >
          <CounterComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default CounterErrorBoundary;
