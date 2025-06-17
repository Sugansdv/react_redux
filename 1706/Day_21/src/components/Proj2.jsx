import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from '../redux/todoSlice';

const Proj2 = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div className="container mt-5 w-50 border rounded p-4 shadow">
      <h4 className="text-center mb-4">Mini Project 2: Todo List</h4>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? 'list-group-item-success' : ''
            }`}
          >
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => dispatch(toggleComplete(todo.id))}
            >
              {todo.text}
            </span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proj2;
