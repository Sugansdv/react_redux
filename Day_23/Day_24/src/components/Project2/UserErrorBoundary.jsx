import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import UserList from './UserList';
import UserFallback from './UserFallback';

const UserErrorBoundary = () => (
  <div className="container mt-5">
    <div className="card p-4 shadow-sm">
      <h4>Mini Project 2: API Fetch Error Boundary</h4>
      <ErrorBoundary
        FallbackComponent={UserFallback}
        onError={(error, info) => console.error("Error caught:", error)}
        onReset={() => window.location.reload()}
      >
        <UserList />
      </ErrorBoundary>
    </div>
  </div>
);

export default UserErrorBoundary;
