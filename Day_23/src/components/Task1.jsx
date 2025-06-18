import React from 'react';

const Task1 = () => (
  <div className="card mb-3 p-3">
    <h5>Task 1: Introduction to Middleware</h5>
    <p>
      Middleware in Redux is a function that sits between dispatching an action and the moment it reaches the reducer. 
      It is used for side effects like API calls, logging, etc. Redux Thunk is a popular middleware that allows you to write action creators that return a function instead of an action.
    </p>
  </div>
);

export default Task1;