import React from 'react';

const Task1 = () => {
  return (
    <div className="container mt-5 p-4 border rounded">
      <h4 className="text-center mb-4">Task 1: Introduction to Actions and Reducers</h4>

      <div className="mb-3">
        <h5>What are Actions in Redux?</h5>
        <p>
          Actions are plain JavaScript objects that describe an event or change in the application. Each action must have a <code>type</code> property, and it can include additional data in a <code>payload</code>.
        </p>
      </div>

      <div className="mb-3">
        <h5>What are Reducers in Redux?</h5>
        <p>
          Reducers are pure functions that take the current state and an action as input and return a new state. They determine how the application's state should change in response to actions.
        </p>
      </div>

      <div>
        <h5>How do Actions and Reducers work together?</h5>
        <p>
          When an action is dispatched, Redux sends it to the reducer. The reducer looks at the action’s <code>type</code> and returns an updated state based on that action.
        </p>
      </div>
    </div>
  );
};

export default Task1;
