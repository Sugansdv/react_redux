import React from 'react';

const Task1 = () => {
  return (
    <div className="container mt-5 p-4 border rounded">
      <h4 className="text-center mb-4">Task 1: Introduction to Redux</h4>

      <div className="mb-3">
        <h5 className="fw-bold">What is Redux?</h5>
        <p>
          Redux is a predictable state container for JavaScript applications, 
          commonly used with React to manage the state of the application efficiently. 
          It helps in maintaining the state of the application in a single, centralized store, 
          making it easier to manage and debug the state across various components
        </p>
      </div>

      <div>
        <h5 className="fw-bold"> its importance in state management. ?</h5>
        <p>
          Allowing a centralized store to manage the application’s state. 
          This approach leads to easier debugging and testing, enabling developers to reproduce and resolve issues more effectively.
        </p>
      </div>
    </div>
  );
};

export default Task1;
