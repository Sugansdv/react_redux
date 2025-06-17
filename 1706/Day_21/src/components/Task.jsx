import React from "react";
import Task1 from "./Task1";
import Task3To8 from "./Task3To8";
import Task9 from "./Task9";
import Task13MessageDisplay from "./Task13MessageDisplay";
import Task13MessageUpdater from "./Task13MessageUpdater";
import Task10 from './Task10';

function Task() {
  return (
    <>
      <Task1 /><br /><hr />
      <div className="container mt-5 p-4 border rounded">
        <h4>
          Task 2. Install Redux and React-Redux: using npm install redux react-redux.
        </h4>
      </div><br /><hr />
      <Task3To8 /><br /><hr />
      <Task9 /><br /><hr />
      <div className="container">
        <Task10 initialValue={5} />
      </div><br /><hr />
      <div>
        <ul className="list-group w-50 m-auto">
          <li className="list-group-item list-group-item-success">
            Task 11: Redux DevTools enabled for debugging
          </li>
        </ul>
      </div><br /><hr />
      <div>
        <ul className="list-group w-50 m-auto">
          <li className="list-group-item list-group-item-info">
            Task 12: Logger middleware added to log dispatched actions and
            state.
          </li>
        </ul>
      </div><br /><hr />
      <div className="container mt-5">
        <Task13MessageUpdater />
        <Task13MessageDisplay />
      </div><br /><hr />
    </>
  );
}

export default Task;
