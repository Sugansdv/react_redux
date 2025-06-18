import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundaryWrapper from './ErrorBoundaryWrapper';
import WorkingChild from './WorkingChild';
import CrashingChild from './CrashingChild';

const ErrorBoundaryWithChildren = () => {
  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 8: Error Boundary with Children</h4>
        <p>
          This component demonstrates wrapping multiple child components with a single error boundary. 
          If any child throws an error, the fallback UI will appear.
        </p>

        <ErrorBoundaryWrapper>
          <WorkingChild />
          <CrashingChild />
        </ErrorBoundaryWrapper>
      </div>
    </div>
  );
};

export default ErrorBoundaryWithChildren;
