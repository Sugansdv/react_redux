import React from 'react'

function Task3to13() {
   return (
    <div className="container mt-4">

      <ul className="list-group">

        <li className="list-group-item">
          <strong>Task 3: Basic Middleware Setup</strong><br />
          Adds Redux Thunk to middleware in store setup.<br />
         <code>store.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 4: Thunk Action Creator</strong><br />
          Create a thunk action that logs a message.<br />
          <code>userActions.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 5: Fetch API with Thunk</strong><br />
          Fetches user data from API using thunk.<br />
          <code>userActions.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 6: Loading State</strong><br />
          Adds loading flag in reducer for API call state.<br />
          <code>redux/userReducer.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 7: Error Handling</strong><br />
          Catches API error in thunk and updates error state.<br />
          <code>redux/userReducer.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 8: Multiple Thunks</strong><br />
          Creates separate thunks for users and posts.<br />
           <code>userActions.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 9: Dispatch Thunk from Component</strong><br />
           Dispatch thunk (e.g., fetchUsers) using <code>useDispatch</code>.<br />
          <code>Task9.jsx</code>
        </li>

        <li className="list-group-item">
          <strong>Task 10: Redux DevTools Integration</strong><br />
          Enables DevTools in store config.<br />
          <code>store.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 11: Logger Middleware</strong><br />
          Logs every dispatched action and new state.<br />
          <code>middlewares/logger.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 12: Promise Middleware</strong><br />
          Custom middleware to handle promise actions.<br />
          <code>middlewares/promise.js</code>
        </li>

        <li className="list-group-item">
          <strong>Task 13: Combine Middleware</strong><br />
          Combine redux-thunk and custom middleware in store setup.<br />
         <code>store.js</code>
        </li>
      </ul>
    </div>
  );
};

export default Task3to13



