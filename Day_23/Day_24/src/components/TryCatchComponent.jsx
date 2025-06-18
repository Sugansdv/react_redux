import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TryCatchComponent = () => {
  const handleClick = () => {
    try {
      throw new Error("Synchronous Error: Something went wrong inside the handler.");
    } catch (error) {
      alert(`Caught Error: ${error.message}`);
      console.error("Caught error in try-catch:", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 6: Try-Catch in Functional Components</h4>
        <p>
          This component uses a <code>try-catch</code> block in an event handler to catch
          synchronous errors.
        </p>
        <button className="btn btn-warning mt-2 w-25" onClick={handleClick}>
          Trigger Try-Catch Error
        </button>
      </div>
    </div>
  );
};

export default TryCatchComponent;
