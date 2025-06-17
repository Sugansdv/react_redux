import React from 'react'
import Task1 from './Task1'
import Task2To6 from './Task2To6'
import Task3 from './Task3'
import Task11 from './Task11'

function Task() {
  return (
    <div>
        <Task1 /> <br /><hr />
        <Task2To6 /><br /><hr />
        <Task3 /><br /><hr />
       <div className='container text-center'>
  <h5>Task 9 Return Unchanged State: Return the current state if no action matches in 
the reducer. </h5>
  <p>
    In userReduce.js -<code>action.type</code> doesn't match any case, the reducer should return the existing state unchanged.
    This is handled in the <code>default</code> case of the <code>switch</code> block.
  </p>
</div><br /><hr />
        <div className='container text-center'>
            <h4>Task 10. Combine Reducers:</h4>
            <p>
                Creating two separate reducers: counterReducer and userReducer<br />
                Combining them using combineReducers() in store.js
            </p>
        </div><br /><hr />
        <Task11 /><br /><hr />
        <div className='container text-center'>
  <h5>12. Immutable State Update:  </h5>
  <p>
    An <strong>immutable update</strong> return a <code>new object</code> or <code>array</code> instead of modifying the existing state directly.
    This ensures Redux can properly detect state changes and keep the app predictable.
  </p>
</div>
    <br /><hr />
       <div className='container text-center'>
  <h5>Task 13. Redux DevTools Inspection: </h5>
  <p><strong>Redux DevTools</strong> browser extension to inspect every dispatched action,
    view the state before and after each action, and debug state changes in real-time.
    It's enabled using <code>window.__REDUX_DEVTOOLS_EXTENSION__()</code> in the store.
  </p>
</div>

    </div>

    
  )
}

export default Task