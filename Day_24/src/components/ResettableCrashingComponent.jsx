import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResettableCrashingComponent = () => {
  const [triggerError, setTriggerError] = useState(false);

  if (triggerError) {
    throw new Error("Simulated error: component crashed.");
  }

  return (
    <div className="alert alert-success">
      Component loaded successfully!
      <br />
      <button
        className="btn btn-danger mt-2"
        onClick={() => setTriggerError(true)}
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ResettableCrashingComponent;
