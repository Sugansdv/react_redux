import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/todos/todoSlice';

const Proj3 = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Proj3: Simple Todo App</h2>

      <div className="input-group mb-3 w-50 m-auto">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success ms-2" onClick={handleAdd}>
          ➕ Add
        </button>
      </div>

      <ul className="list-group w-50 mx-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo.text}
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proj3;
