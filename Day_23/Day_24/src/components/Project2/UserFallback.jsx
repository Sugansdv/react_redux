import React from 'react';

const UserFallback = ({ error, resetErrorBoundary }) => (
  <div className="alert alert-danger text-center">
    <h5>❌ Failed to Load Users</h5>
    <p><strong>Error:</strong> {error.message}</p>
    <button className="btn btn-warning mt-2" onClick={resetErrorBoundary}>
      🔄 Try Again
    </button>
  </div>
);

export default UserFallback;
