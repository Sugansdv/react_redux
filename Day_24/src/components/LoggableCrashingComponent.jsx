import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoggableCrashingComponent = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("Intentional error for logging.");
  }

  return (
    <div className="alert alert-success">
      No error. Click below to trigger an error.
      <br />
      <button className="btn btn-danger mt-2" onClick={() => setShouldCrash(true)}>
        Trigger Error
      </button>
    </div>
  );
};

export default LoggableCrashingComponent;
