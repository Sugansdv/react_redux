import React from 'react'
import Task2 from './Task2'
import Task1 from './Task1'
import Task3 from './Task3'
import Task6 from './Task6'
import Task8 from './Task8'
import Task10 from './Task10'
import Task13 from './Task13'

function Task() {
  return (
    <>
        <Task1 />
        <br /><hr />
        <Task2 />
        <br /><hr />
        <Task3 />
        <br /><hr />
        <Task6 />
        <br /><hr />
        <Task8 />
        <br /><hr />
        <Task10 />
        <br /><hr />
        <div>
            <h4 className='text-center'>Task 12:
Use Redux DevTools to inspect actions and state changes for your thunk.</h4>
        </div>
        <br /><hr />
        <Task13 />
        <br /><hr />
    </>
  )
}

export default Task