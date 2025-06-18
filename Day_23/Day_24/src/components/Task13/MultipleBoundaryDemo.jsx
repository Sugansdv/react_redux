import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import MultiErrorBoundary from './MultiErrorBoundary';

const MultipleBoundaryDemo = () => {
  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 13: Multiple Error Boundaries</h4>
        <p>Each component below is wrapped in its own error boundary:</p>

        <MultiErrorBoundary>
          <ComponentA />
        </MultiErrorBoundary>

        <MultiErrorBoundary>
          <ComponentB />
        </MultiErrorBoundary>

        <MultiErrorBoundary>
          <ComponentC />
        </MultiErrorBoundary>
      </div>
    </div>
  );
};

export default MultipleBoundaryDemo;
