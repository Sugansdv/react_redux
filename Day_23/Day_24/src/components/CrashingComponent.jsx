import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrashingComponent = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("Custom Error: Failed to load this section due to a simulated issue.");
  }

  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 4 & 5: Error Fallback UI + Custom Error Message</h4>
        <p>
          This component throws a custom error when the button is clicked, and
          the fallback UI will display that custom message.
        </p>
        <button
          className="btn btn-danger mt-2 w-25"
          onClick={() => setShouldCrash(true)}
        >
          Trigger Custom Error
        </button>
      </div>
    </div>
  );
};

export default CrashingComponent;
