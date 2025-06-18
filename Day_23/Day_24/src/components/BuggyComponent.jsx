import React, { useState } from 'react';

const BuggyComponent = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Manual error triggered!");
  }

  return (
    <div className="m-4">
      <h5>This component is working fine.</h5>
      <button className="btn btn-danger mt-2" onClick={() => setHasError(true)}>
        Trigger Error
      </button>
    </div>
  );
};

export default BuggyComponent;
