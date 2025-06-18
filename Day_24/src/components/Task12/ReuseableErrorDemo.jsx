import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReusableErrorBoundary from './ReusableErrorBoundary';
import SafeComponent from './SafeComponent';
import CrashingReusableComponent from './CrashingReusableComponent';

const ReusableErrorDemo = () => {
  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 12: Reusable Error Boundary</h4>
        <p> reusable <code>ErrorBoundary</code> component wrapping any child components.</p>

        <ReusableErrorBoundary>
          <SafeComponent />
          <CrashingReusableComponent />
        </ReusableErrorBoundary>
      </div>
    </div>
  );
};

export default ReusableErrorDemo;
